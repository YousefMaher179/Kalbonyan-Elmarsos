import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";
// import AuthContext from "./Store/auth-context";

function App() {
  const cta = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedOnInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedOnInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    <React.Fragment>
      <MainHeader />
      <main>
        {!cta.isLoggedIn && <Login />}
        {cta.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
