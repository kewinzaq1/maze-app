import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const FooterStyles = styled.footer`
  padding-top: 5rem;
  .line {
    width: 100%;
    background: var(--grey_1);
    height: 2px;
    opacity: 0.4;
  }
  .footer__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;

    img {
      width: 5rem;
      display: none;
    }
    svg {
      width: 1rem;
    }

    &--main {
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 2rem auto;
      justify-content: space-between;

      ul {
        display: flex;
        flex-direction: column;

        li:first-child {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        li:not(:first-child) {
          cursor: pointer;
          margin-bottom: 0.25rem;
          opacity: 0.8;
        }
      }
    }

    &--main,
    &--footer {
      display: flex;
      gap: 2rem;
    }

    &--footer {
      flex-direction: column-reverse;

      ul {
        display: flex;
      }

      .footer__list--info {
        li:not(:last-child) {
          margin-right: 0.5rem;
          padding-right: 0.5rem;
          border-right: 1px solid var(--grey_1);
        }
      }

      .footer__list--socials {
        gap: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    .footer__wrapper {
      &--footer {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className='footer__wrapper'>
        <div className='line'></div>
        <div className='footer__wrapper--main'>
          <ul>
            <li>Products</li>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Integrate</li>
            <li>What's New</li>
            <li>Cusomers</li>
            <li>Templates</li>
            <li>System Status</li>
          </ul>
          <ul>
            <li>Use Cases</li>
            <li>Concept & Idea Validation</li>
            <li>Wireframe & Usability Testing</li>
            <li>Content & Copy Testing</li>
            <li>Feedback & Satisfaction</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Getting Started with Maze</li>
            <li>Usability Testing Guides</li>
            <li>Ux Research Guide</li>
            <li>Guide to Procust Discovery</li>
            <li>Concept Testing Guide</li>
            <li>Survey Design Guide</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer__wrapper--footer'>
          <ul className='footer__list--info'>
            <li>Copyright 2021 Maze</li>
            <li>Privace policy</li>
            <li>Security</li>
          </ul>
          <ul className='footer__list--socials'>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
