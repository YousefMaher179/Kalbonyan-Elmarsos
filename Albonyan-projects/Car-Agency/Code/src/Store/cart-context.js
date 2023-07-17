import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext({});

const stateCartItems = localStorage.getItem("cart-items")
  ? JSON.parse(localStorage.getItem("cart-items"))
  : [];

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(stateCartItems);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemsAmount = (id) => {
    return cartItems.find((item) => item.id === id)?.amount || 0;
  };

  const increaseCartAmount = ({ id, name, clas, image }) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          { id, amount: 1, name: name, class: clas, image: image },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const increaseInsideCartAmount = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, amount: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartAmount = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  const cartAmount = cartItems.reduce(
    (amount, item) => item.amount + amount,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemsAmount,
        increaseCartAmount,
        decreaseCartAmount,
        removeItemFromCart,
        cartAmount,
        increaseInsideCartAmount,
        removeAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useShoppingCart = () => {
  return useContext(CartContext);
};
