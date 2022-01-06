import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import image from "../../assets/comunity/discover/image.png";

const DiscoverStyles = styled.section`
  padding: 5rem 0;
  .discover__wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 10rem;
      align-items: center;
    }

    &--text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }
`;

function Discover() {
  return (
    <DiscoverStyles>
      <div className='discover__wrapper'>
        <div className='discover__wrapper--image'>
          <img src={image} alt='discover' />
        </div>
        <div className='discover__wrapper--text'>
          <Title secondary>Discover the mazes created by our Community</Title>
          <Paragraph small>
            Explore our library of 50+ pre-built user tests and surveys, ready
            for you to copy, customize, and share with your own users.
          </Paragraph>
          <Button outline text='Explore Templates' pad1 />
        </div>
      </div>
    </DiscoverStyles>
  );
}

export default Discover;
