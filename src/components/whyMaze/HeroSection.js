import React from "react";
import Title from "../shared/Title";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import styled from "styled-components";
import heroVideo from "../../assets/why-maze/heroVideo.mp4";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const HeroStyles = styled.section`
  padding: 5rem 0;
  .hero__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    &--text,
    &--video {
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 900px;
    }

    &--text {
      padding: 2rem;
      gap: 1rem;

      .hero__button,
      a {
        padding: 1.25rem;
      }
    }

    &--video {
      border-radius: 1.5rem;
      width: 90%;
      box-shadow: var(--boxShadow_1);
      max-width: 1100px;
      video,
      source {
        object-fit: contain;
        border-radius: 1.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 10rem 0;
  }
`;

function HeroSection() {
  const { checkingName } = useGlobalContext();

  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__wrapper--text'>
          <Title>User testing, reimagined for everyone</Title>
          <Paragraph>
            User insights shouldn’t be siloed. Learning shouldn’t be slow. Maze
            empowers everyone to source and access invaluable user
            insights—putting data in the hands of the many.
          </Paragraph>
          <Link to='/signup' role='button' onClick={checkingName}>
            <Button
              className='hero__button'
              secondary
              text='Get started free'
            />
          </Link>
        </div>
        <div className='hero__wrapper--video'>
          <video autoPlay muted loop>
            <source src={heroVideo} autoPlay muted loop />
          </video>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
