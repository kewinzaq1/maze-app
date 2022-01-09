import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import background from "../../assets/comunity/hero/background.jfif";
import Button from "../shared/Button";
const HeroStyles = styled.section`
  background-color: #e7f1f3;
  min-height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .hero__wrapper {
    padding-top: 100px;
    z-index: 10;
    .input__newsletter {
      display: flex;
      width: 100%;
      &--input {
        border: none;
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 2px solid transparent;
        transition: 500ms;
        border-radius: 0.25rem;

        &::placeholder {
          font-weight: 600;
          opacity: 0.4;
        }
        &:hover:not(:focus) {
          outline: 2px solid var(--blue_2);
        }

        &:focus {
          outline: 2px solid var(--blue_1);
        }
      }

      &--button {
        margin-left: -40%;
        border-radius: 0;
        width: 40%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
    }
    .hero__text {
      padding: 2rem;
      display: flex;
      gap: 1.25rem;
      flex-direction: column;
      max-width: 600px;

      .hero__buttons {
        display: flex;
        gap: 1rem;
      }
    }
  }

  .hero__background {
    video {
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    background-color: #e7f1f3;
    min-height: fit-content;
    width: 100vw;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    background-image: url(${background});
    background-position: top right;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    .hero__wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .hero__text {
        padding: 2rem;
        display: flex;
        gap: 1.25rem;
        flex-direction: column;
        height: 100%;
        width: 50%; //
      }
    }

    .hero__background {
      display: none;
    }
  }
`;

function Hero() {
  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__text'>
          <Title>Maze Community</Title>
          <Paragraph>
            A space for makers, creators, and innovators. Whether you're a Maze
            veteran or still forging your way down the product path, this is
            your community to share ideas, ask questions, and collaborate with
            other a-maze-ing humans.
          </Paragraph>

          <div className='input__newsletter'>
            <input
              type='email'
              placeholder='name@email.com'
              className='input__newsletter--input'
            />
            <Button
              secondary
              text='Join our newsletter'
              className='input__newsletter--button'
            />
          </div>
        </div>
      </div>
      <div className='hero__background'>
        {/* <VideoTag src={HeroAnimation} poster='' />
         */}
        <img src={background} alt='bg' />
      </div>
    </HeroStyles>
  );
}

export default Hero;
