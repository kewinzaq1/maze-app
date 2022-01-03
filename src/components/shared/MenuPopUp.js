import React from "react";
import blogIcon from "../../assets/resources/blog.png";
import helpIcon from "../../assets/resources/help.png";
import collectionsIcon from "../../assets/resources/conversation.png";
import UxUiIcon from "../../assets/resources/uxui.png";
import developmentIcon from "../../assets/resources/collections.png";
import testIcon from "../../assets/products/test.svg";
import integrateIcon from "../../assets/products/integrate.svg";
import reportIcon from "../../assets/products/report.svg";
import colaborateIcon from "../../assets/products/colaborate.svg";
import styled from "styled-components";

const MenuPopStyles = styled.div`
  width: 100vw;
  background: var(--white_1);
  z-index: -1;
  position: relative;
  margin-top: -3rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--boxShadow_1);

  .resources__list {
    img {
      width: 50px;
    }
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    justify-content: center;
    transition: 500ms;

    padding: 3rem 5rem;
    padding-top: 5rem;
    h1 {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.1em;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }

  .product__list {
    img {
      width: 25px;
    }

    h1 {
      font-size: 0.8rem;
      opacity: 0.4;
      text-transform: uppercase;
      border-bottom: 2px solid #1111114e;
      font-weight: 600;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
    gap: 2rem;
    justify-content: space-between;

    .width-50 {
      width: 50%;
      display: flex;
      flex-direction: column;
    }

    li {
      cursor: pointer;
    }
    .product__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      justify-content: flex-start;
      justify-items: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 1rem;

      li {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        font-size: 1.2rem;
        text-transform: capitalize;

        img,
        h2 {
        }

        h2 {
          font-size: 1.25rem;
          font-weight: 500;
          display: flex;
          gap: 1rem;
        }
        p {
          font-size: 1rem;
        }
      }
      /* li {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 1.2rem;
        text-transform: capitalize;
      } */
    }

    .width-25 {
      width: 25%;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  background-color: var(--white_1);
  transition: 1s;

  &.none {
    transform: translateY(-100vh);
  }

  @media (max-width: 1024px) {
    display: none !important;
  }
`;

function MenuPopUp({
  popMenu,
  setPopMenu,
  popResources,
  setPopResources,
  popProduct,
  setPopProduct,
}) {
  return (
    <MenuPopStyles
      className={`${!popMenu ? "none" : ""}`}
      onMouseLeave={() => {
        setPopResources(false);
        setPopProduct(false);
        setPopMenu(false);
      }}>
      {/* resources list  */}
      {popResources ? (
        <ul className='resources__list'>
          <li>
            <img src={blogIcon} alt='blog' />
            <h1>Blog</h1>
            <p>News, ideas, and insights on testing</p>
          </li>
          <li>
            <img src={helpIcon} alt='help' />
            <h1>Help Center</h1>
            <p>Get your questions answered</p>
          </li>
          <li>
            <img src={collectionsIcon} alt='collection' />
            <h1>Guides</h1>
            <p>Learn the basics with expert resources</p>
          </li>
          <li>
            <img src={UxUiIcon} alt='UX/UI' />
            <h1>UI/UI Design</h1>
            <p>Best practices, inspiration, and examples</p>
          </li>
          <li>
            <img src={developmentIcon} alt='development' />
            <h1>Product Development</h1>
            <p>Expert advice, best practices, and success stories</p>
          </li>
        </ul>
      ) : (
        ""
      )}

      {/* product list  */}

      {popProduct ? (
        <div className='product__list'>
          <div className='width-50'>
            <div className='product__heading'>
              <h1>features</h1>
            </div>
            <ul className='product__grid'>
              <li>
                <h2>
                  <img src={testIcon} alt='colaborate' />
                  Test
                </h2>
                <p>
                  Rapidly test & validate prototypes, concepts, copy, and more
                </p>
              </li>
              <li>
                <h2>
                  <img src={integrateIcon} alt='colaborate' />
                  Integrate
                </h2>
                <p>
                  Rapidly test & validate prototypes, concepts, copy, and more
                </p>
              </li>
              <li>
                <h2>
                  <img src={reportIcon} alt='colaborate' />
                  Report
                </h2>
                <p>
                  Rapidly test & validate prototypes, concepts, copy, and more
                </p>
              </li>
              <li>
                <h2>
                  <img src={colaborateIcon} alt='colaborate' />
                  Colaborate
                </h2>
                <p>
                  Rapidly test & validate prototypes, concepts, copy, and more
                </p>
              </li>
            </ul>
          </div>
          <div className='width-25'>
            <div className='product__heading'>
              <h1>maze for</h1>
            </div>
            <li>Product designers</li>
            <li>Product managers</li>
            <li>Product marketers</li>
            <li>User Researchers</li>
          </div>
          <div className='width-25'>
            <div className='product__heading'>
              <h1>use cases</h1>
            </div>
            <li>Concept & Idea Validation</li>
            <li>Wireframe & Usability Testing</li>
            <li>Content & Copy Testing</li>
            <li>Feedback & Satisfaction</li>
          </div>
        </div>
      ) : (
        ""
      )}
    </MenuPopStyles>
  );
}

export default MenuPopUp;
