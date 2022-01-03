import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Paragraph from "./Paragraph";

const TestiStyles = styled.section`
  margin: 5rem 0;
  background: var(--yellow_1);
  position: relative;
  height: 600px;
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
      width: 15rem;
      height: 3rem;
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
      width: 30%;
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

  &.testi--violet {
    background: #e6dff3 !important;
  }
`;

function TestiSection({ image, logo, title, quots, paragraph, ...rest }) {
  return (
    <TestiStyles {...rest}>
      <div className='braze__image'>
        <img src={image} alt='braze-woman' />
      </div>
      <div className='braze__text'>
        <img src={logo} alt={title} />
        <Paragraph className='braze__qouts'>{quots}</Paragraph>
        <Paragraph className='braze__paragraph'>{paragraph}</Paragraph>
        <Button outline text='Learn more' />
      </div>
    </TestiStyles>
  );
}

export default TestiSection;
