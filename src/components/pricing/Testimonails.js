import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import { AiOutlineRight } from "react-icons/ai";
import TestiSlider from "./TestiSlider";
import { useGlobalContext } from "../../context";

const TestimonailsStyled = styled.section`
  .testimoanils__wrapper {
    margin: 0 auto;
    max-width: 1200px;

    &--heading {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding: 2rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-weight: 500;
        svg {
          width: 1rem;
          color: var(--blue_1);
        }
      }
    }
    &--sliderMobile {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background: #ffe6d0;
      width: 100%;
      height: 20rem;
    }

    &--sliderDesktop {
      border-radius: 2rem;
      height: 35rem;
      background: #ffe6d0;
      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    .testimoanils__wrapper {
      width: 90%;
    }
  }
`;

function Testimonails() {
  const { isMobile } = useGlobalContext();
  return (
    <TestimonailsStyled>
      <div className='testimoanils__wrapper'>
        <div className='testimoanils__wrapper--heading'>
          <Title secondary>You'll be in good company</Title>
          <Paragraph>
            Read our customer stories <AiOutlineRight />
          </Paragraph>
        </div>
        {isMobile ? (
          <div className='testimoanils__wrapper--sliderMobile'>
            <TestiSlider />
          </div>
        ) : (
          <div className='testimoanils__wrapper--sliderDesktop'>
            <TestiSlider />
          </div>
        )}
      </div>
    </TestimonailsStyled>
  );
}

export default Testimonails;
