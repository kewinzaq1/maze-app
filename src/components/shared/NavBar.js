import React, { useState, useEffect } from "react";
import LogoBig from "../../assets/logo/logo__big.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import Button from "../shared/Button";
import MenuMobile from "../shared/MenuMobile";
import MenuPopUp from "../shared/MenuPopUp";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const NavbarStyles = styled.nav`
  position: fixed;
  top: 0;
  transition: background 1s;
  width: 100vw;
  height: 80px;
  z-index: 999;
  box-shadow: var(--boxShadow_1);
  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

    &.login {
      max-width: 100%;
    }

    .nav__logo {
      padding-top: 0.3rem;
    }
  }

  .nav__button--hamburger {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .nav__list {
    ul {
      display: flex;
      gap: 1rem;
      font-weight: 500;

      li {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid var(--blue_1);
        }
        svg {
          font-size: 1rem;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  &:hover,
  &.active {
    transition: background 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: var(--white_1);
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.075) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.075) 0px 30px 60px -30px;
    color: var(--black_1);
    filter: invert(0);

    .nav__wrapper.enterprise {
      color: var(--dark_1);
      li,
      a {
        color: var(--black_1);
      }
      .nav__logo {
        filter: invert(0%);
      }
    }
  }

  .nav__wrapper.enterprise {
    color: var(--white_1);
    li,
    a {
      color: var(--white_1);
    }
    .nav__logo {
      padding-top: 0.3rem;
      filter: invert(100%);
    }
  }
`;

function NavBar() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px").matches
  );

  const { isLogin, checkingName, currentPage, setCurrentPage } =
    useGlobalContext();

  const [navbarActive, setNavbarActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [popMenu, setPopMenu] = useState(false);
  const [popResources, setPopResources] = useState(false);
  const [popProduct, setPopProduct] = useState(false);

  const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 90) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 1024px").matches);
    });
  }, []);

  return (
    <NavbarStyles
      className={
        navbarActive || mobileMenu || popResources || popProduct ? "active" : ""
      }>
      <div className={`nav__wrapper ${isLogin ? "login" : ""}`}>
        <div className='nav__logo'>
          <Link to='/'>
            <img src={LogoBig} alt='maze' onClick={checkingName} />
          </Link>
        </div>
        {isMobile && !isLogin ? (
          <div
            className='nav__button--hamburger'
            role='button'
            onClick={() => setMobileMenu(!mobileMenu)}>
            {!mobileMenu ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
        ) : (
          ""
        )}
        {!isMobile && !isLogin ? (
          <>
            <div className='nav__list'>
              <ul>
                <li
                  className={currentPage === "why-maze" ? "active" : ""}
                  role='button'
                  onMouseEnter={() => {
                    setPopMenu(false);
                  }}
                  onClick={() => {
                    checkingName();
                    setCurrentPage("why-maze");
                  }}>
                  <Link to='/why-maze'>Why Maze?</Link>
                </li>
                <li
                  role='button'
                  onMouseEnter={() => {
                    setPopProduct(true);
                    setPopResources(false);
                    setPopMenu(true);
                  }}>
                  Product <AiOutlineDown />
                </li>
                <li
                  className={currentPage === "enterprise" ? "active" : ""}
                  role='button'
                  onMouseEnter={() => {
                    setPopMenu(false);
                  }}
                  onClick={() => {
                    checkingName();
                    setCurrentPage("enterprise");
                  }}>
                  <Link to='/enterprise'>Enterprise</Link>
                </li>
                <li
                  className={currentPage === "pricing" ? "active" : ""}
                  role='button'
                  onMouseEnter={() => {
                    setPopMenu(false);
                  }}
                  onClick={() => {
                    checkingName();
                    setCurrentPage("enterprise");
                  }}>
                  <Link to='/pricing'>Pricing</Link>
                </li>
                <li
                  role='button'
                  onMouseEnter={() => {
                    setPopProduct(false);
                    setPopMenu(true);
                    setPopResources(true);
                  }}>
                  Resources <AiOutlineDown />
                </li>
                <li
                  className={currentPage === "comunity" ? "active" : ""}
                  role='button'
                  onMouseEnter={() => {
                    setPopMenu(false);
                  }}
                  onClick={() => {
                    checkingName();
                    setCurrentPage("comunity");
                  }}>
                  <Link to='/comunity'>Comunity</Link>
                </li>
              </ul>
            </div>
            <div className='nav__action'>
              <Link
                to='/login'
                role='button'
                onClick={() => {
                  checkingName();
                  setCurrentPage("login");
                }}>
                <Button text='login' />
              </Link>
              <Link
                to='/signup'
                role='button'
                onClick={() => {
                  checkingName();
                  setCurrentPage("login");
                }}>
                <Button secondary text='Get started free' />
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <MenuMobile
        mobileMenu={mobileMenu}
        isMobile={isMobile}
        setMobileMenu={setMobileMenu}
      />
      <MenuPopUp
        popMenu={popMenu}
        setPopMenu={setPopMenu}
        isMobile={isMobile}
        popResources={popResources}
        setPopResources={setPopResources}
        popProduct={popProduct}
        setPopProduct={setPopProduct}
      />
    </NavbarStyles>
  );
}

export default NavBar;
