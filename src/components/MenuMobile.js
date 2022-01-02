import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styled from "styled-components";
import Button from "./Button";
import blogIcon from "../assets/resources/blog.png";
import helpIcon from "../assets/resources/help.png";
import collectionsIcon from "../assets/resources/collections.png";
import UxUiIcon from "../assets/resources/uxui.png";
import developmentIcon from "../assets/resources/collections.png";
import testIcon from "../assets/products/test.svg";
import integrateIcon from "../assets/products/integrate.svg";
import reportIcon from "../assets/products/report.svg";
import colaborateIcon from "../assets/products/colaborate.svg";

const MenuMobileStyles = styled.div`
  margin-top: -2rem;
  z-index: -1;
  padding-top: 2rem;
  background: var(--white_1);
  position: relative;
  .menuMobile__wrappper {
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    padding-bottom: 8rem;
    height: 100vh;
    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      li {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 1.6rem;
        cursor: pointer;

        svg {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }

    &--action {
      width: 100%;
      display: flex;
      gap: 2rem;
      padding-top: 2rem;

      .mobileMenu__button {
        width: 100%;
        text-align: center;
      }
    }

    .menuMobile__addList--resources,
    .menuMobile__addList--product {
      overflow-y: scroll;
      width: 100vw;
      max-height: 250px;
      display: flex;
      flex-direction: column;

      li {
        font-size: 1.2rem;

        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
    .menuMobile__addList--product {
      ul {
        margin-bottom: 3rem;
        li:first-of-type {
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.6;
          font-size: 1rem;
          margin-bottom: -1rem;
          cursor: auto;
        }

        li {
          text-transform: capitalize;
        }
      }
    }
  }
`;

function MenuMobile({ mobileMenu, isMobile }) {
  const [showProduct, setShowProduct] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <>
      {mobileMenu & (isMobile === true) ? (
        <MenuMobileStyles>
          <div className='menuMobile__wrappper'>
            <div className='menuMobile__wrappper--list'>
              <ul>
                <li>Why Maze?</li>
                <li role='button' onClick={() => setShowProduct(!showProduct)}>
                  Product {showProduct ? <AiOutlineUp /> : <AiOutlineDown />}
                </li>
                {showProduct ? (
                  <div className='menuMobile__addList--product'>
                    <ul>
                      <li>features</li>
                      <li>
                        <img src={testIcon} alt='colaborate' />
                        Test
                      </li>
                      <li>
                        <img src={integrateIcon} alt='colaborate' />
                        Integrate
                      </li>
                      <li>
                        <img src={reportIcon} alt='colaborate' />
                        Report
                      </li>
                      <li>
                        <img src={colaborateIcon} alt='colaborate' />
                        Colaborate
                      </li>
                    </ul>
                    <ul>
                      <li>maze for</li>
                      <li>Product designers</li>
                      <li>Product managers</li>
                      <li>Product marketers</li>
                      <li>User Researchers</li>
                    </ul>
                    <ul>
                      <li>use cases</li>
                      <li>Concept & Idea Validation</li>
                      <li>Wireframe & Usability Testing</li>
                      <li>Content & Copy Testing</li>
                      <li>Feedback & Satisfaction</li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <li>Enterprise</li>
                <li>Pricing</li>
                <li
                  role='button'
                  onClick={() => setShowResources(!showResources)}>
                  Resources
                  {showResources ? <AiOutlineUp /> : <AiOutlineDown />}
                </li>
                {showResources ? (
                  <ul className='menuMobile__addList--resources'>
                    <li>
                      <img src={blogIcon} alt='blog' />
                      Blog
                    </li>
                    <li>
                      <img src={helpIcon} alt='blog' />
                      Help Center
                    </li>
                    <li>
                      <img src={collectionsIcon} alt='blog' />
                      Guides
                    </li>
                    <li>
                      <img src={UxUiIcon} alt='blog' />
                      UX/UI Design
                    </li>
                    <li>
                      <img src={developmentIcon} alt='blog' />
                      Product Development
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <li>Comunity</li>
              </ul>
            </div>
            <div className='menuMobile__wrappper--action'>
              <Button outline text='Log in' className='mobileMenu__button' />
              <Button
                secondary
                text='Get started free'
                className='mobileMenu__button'
              />
            </div>
          </div>
        </MenuMobileStyles>
      ) : (
        ""
      )}
    </>
  );
}

export default MenuMobile;
