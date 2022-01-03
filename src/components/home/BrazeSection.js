import React from "react";
import styled from "styled-components";
import brazeLogo from "../../assets/braze/logo.png";
import brazeWoman from "../../assets/braze/woman.png";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";

const BrazeStyles = styled.section`
  margin: 5rem 0;
  background: var(--yellow_1);
  position: relative;
  height: 800px;
  .braze__image {
    display: none;
  }
  .braze__text {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    height: 100%;

    .braze__qouts {
      font-weight: 300;
      font-size: 1rem;
    }

    .braze__paragraph {
      opacity: 0.5;
      font-size: 1.1rem;
    }

    img {
      width: 8rem;
      height: 5rem;
    }
  }

  /* @media (min-width: 768px) {
    .braze__image {
      display: flex;
      width: 50%;
    }
    .braze__text {
      width: 50%;
    }
  } */

  @media (min-width: 1024px) {
    .braze__image {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50%;
    }

    .braze__text {
      width: 50%;
      position: absolute;
      right: 0;
      text-align: left;
      align-items: flex-start;

      * {
        max-width: 600px;
      }
    }
  }
`;

function BrazeSection() {
  return (
    <BrazeStyles>
      <div className='braze__image'>
        <img src={brazeWoman} alt='braze-woman' />
      </div>
      <div className='braze__text'>
        <img src={brazeLogo} alt='braze-logo' />
        <Paragraph className='braze__qouts'>
          "Using Maze has supercharged our product design process and made it
          possible to drive faster turnaround times, speeding up product
          iteration and making for a better, faster user experience."
        </Paragraph>
        <Paragraph className='braze__paragraph'>
          Yuna Akazawa, Product Designer at Braze
        </Paragraph>
        <Button outline text='Learn more' />
      </div>
    </BrazeStyles>
  );
}

export default BrazeSection;
