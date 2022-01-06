import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.replace("/", "")
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px").matches
  );
  const [involved, setInvolved] = useState("events");

  useEffect(() => {
    console.log(involved);
  }, [involved]);

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
      if (currentLocation === "enterprise") {
        document.querySelector(".nav__wrapper").classList.add("enterprise");
      } else {
        document.querySelector(".nav__wrapper").classList.remove("enterprise");
      }
      setCurrentPage(currentLocation);
    }, 100);
  };

  window.addEventListener("popstate", () => {
    checkingName();
  });

  useEffect(() => {
    checkingName();
    setCurrentPage(window.location.pathname.replace("/", ""));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        checkingName,
        currentPage,
        setCurrentPage,
        isMobile,
        setIsMobile,
        involved,
        setInvolved,
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
