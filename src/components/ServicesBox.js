import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const ServicesBoxStyles = styled.article`
  position: relative;
  padding: 2rem;
  border-radius: 2rem;
  color: var(--white_2);
  height: 100%;
  .servicesBox__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    z-index: 10;
    position: relative;
    &--text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-bottom: 2rem;
    }
    .servicesBox__title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .servicesBox__button {
      display: flex;
      width: fit-content;
    }

    svg {
      width: 20px;
    }

    &--image {
      width: 100px;
    }
  }

  .servicesBox__shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img {
      border-radius: 1.25rem;
      object-fit: cover;
    }
  }
`;

function ServicesBox({ icon, title, text, background, ...rest }) {
  return (
    <ServicesBoxStyles {...rest}>
      <div className='servicesBox__wrapper'>
        <div className='servicesBox__wrapper--image'>
          <img src={icon} alt={title} />
        </div>
        <div className='servicesBox__wrapper--text'>
          <Title className='servicesBox__title'>{title}</Title>
          <Paragraph className='servicesBox__paragraph'>{text}</Paragraph>
          <Button
            outlineWhite
            text={<AiOutlineArrowRight />}
            className='servicesBox__button'
          />
        </div>
      </div>
      <div className='servicesBox__shape'>
        <img src={background} alt='' />
      </div>
    </ServicesBoxStyles>
  );
}

export default ServicesBox;
