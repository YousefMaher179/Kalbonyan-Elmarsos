import React, { useContext } from "react";
import classes from "./CarCard.module.css";
import ButtonsDiv from "../../UI/ButtonsDiv";
import { useShoppingCart } from "../../../Store/cart-context";
const CarCard = (props) => {
  const { getItemsAmount, increaseCartAmount, decreaseCartAmount } =
    useShoppingCart();
  const amount = getItemsAmount(props.id);

  return (
    <div className={classes["card-container"]}>
      <div className={classes.details}>
        <img src={props.image} alt="car photo" />
        <h3>{props.class}</h3>
        <span>{props.name}</span>
      </div>
      <div className={classes.description}>
        <p>{props.description}</p>
      </div>
      <div className={classes["car-details"]}>
        <div className={classes["car-container"]}>
          <div className={classes.car}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 18C10.5 18 9 18 9 16.5C9 15 10.5 10.5 16.5 10.5C22.5 10.5 24 15 24 16.5C24 18 22.5 18 22.5 18H10.5ZM16.5 9C17.6935 9 18.8381 8.52589 19.682 7.68198C20.5259 6.83807 21 5.69347 21 4.5C21 3.30653 20.5259 2.16193 19.682 1.31802C18.8381 0.474106 17.6935 0 16.5 0C15.3065 0 14.1619 0.474106 13.318 1.31802C12.4741 2.16193 12 3.30653 12 4.5C12 5.69347 12.4741 6.83807 13.318 7.68198C14.1619 8.52589 15.3065 9 16.5 9ZM7.824 18C7.60163 17.5317 7.49074 17.0183 7.5 16.5C7.5 14.4675 8.52 12.375 10.404 10.92C9.46364 10.6303 8.48392 10.4886 7.5 10.5C1.5 10.5 0 15 0 16.5C0 18 1.5 18 1.5 18H7.824ZM6.75 9C7.74456 9 8.69839 8.60491 9.40165 7.90165C10.1049 7.19839 10.5 6.24456 10.5 5.25C10.5 4.25544 10.1049 3.30161 9.40165 2.59835C8.69839 1.89509 7.74456 1.5 6.75 1.5C5.75544 1.5 4.80161 1.89509 4.09835 2.59835C3.39509 3.30161 3 4.25544 3 5.25C3 6.24456 3.39509 7.19839 4.09835 7.90165C4.80161 8.60491 5.75544 9 6.75 9Z"
                fill="#12273D"
              />
            </svg>

            <p>{props.seats} Seats</p>
          </div>
          <div className={classes.car}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58889 15.75H3.17778V4.725H1.58889C0.711524 4.725 0 5.4303 0 6.3V14.175C0 15.0447 0.711524 15.75 1.58889 15.75ZM19.0667 14.175V6.3C19.0667 5.4303 18.3551 4.725 17.4778 4.725H15.8889V15.75H17.4778C18.3551 15.75 19.0667 15.0447 19.0667 14.175ZM14.3 4.725V2.3625C14.3 1.05771 13.233 0 11.9167 0H7.15C5.8337 0 4.76667 1.05771 4.76667 2.3625V15.75H14.3V4.725ZM11.9167 4.725H7.15V2.3625H11.9167V4.725Z"
                fill="#12273D"
              />
            </svg>

            <p>{props.luggage} Luggage</p>
          </div>
        </div>
        <ButtonsDiv
          amount={amount}
          onAdd={() =>
            increaseCartAmount({
              id: props.id,
              name: props.name,
              clas: props.class,
              image: props.image,
            })
          }
          onRemove={() => decreaseCartAmount(props.id)}
        />
      </div>
    </div>
  );
};

export default CarCard;
