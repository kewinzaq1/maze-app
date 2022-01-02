import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { AiOutlineRight } from "react-icons/ai";
import UberLogo from "../assets/testimonials/uber.png";
import BrazeLogo from "../assets/testimonials/braze.png";
import IbmLogo from "../assets/testimonials/ibm.png";
import LogitechLogo from "../assets/testimonials/logitech.png";
import GreenLogo from "../assets/testimonials/greenpeace.png";
import styled from "styled-components";

const TestimonialsStyles = styled.section`
  padding: 10rem 0;
  img {
    /* image-rendering: pixelated; */
  }
  .testimonials__wrapper {
    padding: 2rem;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    &--header {
      display: flex;
      flex-direction: column;
      gap: 1.125rem;
    }

    .testimonials__title {
      font-size: 2rem;
    }
    .testimonails__paragraph {
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      svg {
        width: 1rem;
        height: 1rem;
        color: var(--blue_1);
        font-weight: bold;
        transition: 250ms;
      }

      &:hover {
        svg {
          transform: translateX(5px);
        }
      }
    }
    &--brands {
      margin-top: 5rem;

      img {
        width: 100px;
        height: 100px;
      }
      display: grid;
      gap: 5rem;
      align-content: center;
      justify-items: center;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) {
    .testimonials__wrapper {
      &--brands {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
    }
  }
  @media (min-width: 1024px) {
    .testimonials__wrapper {
      &--header {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 2rem;
      }
      &--brands {
        grid-template-columns: repeat(6, 1fr);

        grid-template-rows: 1fr;
      }
    }
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: var(--grey_1);
    opacity: 0.4;
    margin-top: 5rem;
  }
`;

function Testimonials() {
  return (
    <TestimonialsStyles>
      <div className='testimonials__wrapper'>
        <div className='testimonials__wrapper--header'>
          <Title className='testimonials__title'>
            Trusted by 40,000+ brands
          </Title>
          <Paragraph className='testimonails__paragraph'>
            Read our customer stories <AiOutlineRight />
          </Paragraph>
        </div>
        <div className='testimonials__wrapper--brands'>
          <img src={UberLogo} alt='uber' />
          <img src={BrazeLogo} alt='braze' />
          <img src={IbmLogo} alt='ibm' />
          <img src={LogitechLogo} alt='logitech' />
          <img src={GreenLogo} alt='green' />
          <img src={GreenLogo} alt='green' />
        </div>
      </div>
      <div className='line'></div>
    </TestimonialsStyles>
  );
}

export default Testimonials;
