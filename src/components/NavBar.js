import React, { useState, useEffect } from "react";
import LogoBig from "../assets/logo/logo__big.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import Button from "./Button";
import MenuMobile from "./MenuMobile";

const NavbarStyles = styled.div`
  position: fixed;
  top: 0;
  transition: background 1s;
  width: 100vw;
  height: 80px;
  z-index: 999;
  box-shadow: rgba(255, 255, 255, 0) 0px 1px 1px 0px inset,
    rgba(87, 87, 117, 0) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0) 0px 30px 60px -30px;
  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

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
  }
`;

function NavBar() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px").matches
  );

  const [navbarActive, setNavbarActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <NavbarStyles className={navbarActive || mobileMenu ? "active" : ""}>
      <div className='nav__wrapper'>
        <div className='nav__logo'>
          <img src={LogoBig} alt='maze' />
        </div>
        {isMobile && (
          <div
            className='nav__button--hamburger'
            role='button'
            onClick={() => setMobileMenu(!mobileMenu)}>
            {!mobileMenu ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
        )}
        {!isMobile && (
          <>
            <div className='nav__list'>
              <ul>
                <li>Why Maze?</li>
                <li>
                  Product <AiOutlineDown />
                </li>
                <li>Enterprise</li>
                <li>Pricing</li>
                <li>
                  Resources <AiOutlineDown />
                </li>
                <li>Comunity</li>
              </ul>
            </div>
            <div className='nav__action'>
              <Button text='login' />
              <Button secondary text='Get started free' />
            </div>
          </>
        )}
      </div>
      <MenuMobile mobileMenu={mobileMenu} isMobile={isMobile} />
    </NavbarStyles>
  );
}

export default NavBar;
