import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import { AiOutlineRight } from "react-icons/ai";
import TestiSlider from "./TestiSlider";

const TestimonailsStyled = styled.section`
  .testimoanils__wrapper {
    margin: 0 auto;

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
    &--slider {
      background: #ffe6d0;
      width: 100%;
      height: 25rem;
      padding: 2rem;
    }
  }
`;

function Testimonails() {
  return (
    <TestimonailsStyled>
      <div className='testimoanils__wrapper'>
        <div className='testimoanils__wrapper--heading'>
          <Title secondary>You'll be in good company</Title>
          <Paragraph>
            Read our customer stories <AiOutlineRight />
          </Paragraph>
        </div>
        <div className='testimoanils__wrapper--slider'>
          <TestiSlider />
        </div>
      </div>
    </TestimonailsStyled>
  );
}

export default Testimonails;
