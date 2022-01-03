import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.replace("/", "")
  );

  const checkingName = () => {
    setTimeout(() => {
      const currentLocation = window.location.pathname.replace("/", "");
      window.scrollTo(0, 0);
      if (currentLocation === "login" || currentLocation === "signup") {
        setIsLogin(true);
        document.querySelector("body").style.overflowY = "hidden";
      } else {
        setIsLogin(false);
      }
      console.log(currentLocation);
      setCurrentPage(currentLocation);
      console.log(currentPage);
    }, 100);
  };

  window.addEventListener("popstate", () => {
    checkingName();
  });

  useEffect(() => {
    checkingName();
    setCurrentPage(window.location.pathname.replace("/", ""));
    console.log(currentPage);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        checkingName,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
