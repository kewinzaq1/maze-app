import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const PanelStyles = styled.article`
  position: relative;
  border-radius: 2rem;
  height: 100%;

  .panel__button {
    color: var(--white_1);
    border-color: var(--white_1);
    align-self: flex-start;

    &:hover {
      background-color: var(--white_1);
      color: var(--black_1);
    }
  }
  .article__content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: relative;
    z-index: 9;
    padding: 2rem;
    color: var(--white_1);
    background: #1111119e;
    border-radius: 2rem;
    padding-top: 6rem;
    height: 100%;
    width: 100%;
  }

  .article__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      border-radius: 2rem;
      object-fit: cover;
    }
  }
`;

function Panel({ title, description, buttonText, background, ...rest }) {
  return (
    <PanelStyles {...rest}>
      <div className='article__content'>
        <Title secondary>{title}</Title>
        <Paragraph small>{description}</Paragraph>
        <Button outline text={buttonText} className='panel__button' pad1 />
      </div>
      <div className='article__background'>
        <img src={background} alt={title} />
      </div>
    </PanelStyles>
  );
}

export default Panel;
