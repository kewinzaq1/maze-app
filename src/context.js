import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const checkingName = () => {
    setTimeout(() => {
      const currentLocation = window.location.pathname.replace("/", "");
      if (currentLocation === "login" || currentLocation === "signup") {
        setIsLogin(true);
        window.scrollTo(0, 0);
        document.querySelector("body").style.overflowY = "hidden";
      } else {
        setIsLogin(false);
      }
    }, 100);
  };

  window.addEventListener("popstate", () => {
    checkingName();
  });

  useEffect(() => {
    checkingName();
  }, []);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, checkingName }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
