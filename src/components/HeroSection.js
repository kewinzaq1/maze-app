import React from "react";
import styled from "styled-components";
// import { videoTagString, VideoTag } from "react-video-tag";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Title from "./Title";
import HeroAnimation from "../assets/animations/hero.mp4";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const HeroStyles = styled.section`
  background-color: var(--lightBlue_1);
  min-height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .hero__wrapper {
    padding-top: 100px;
    z-index: 10;
    margin: 0 auto;
    .hero__text {
      padding: 2rem;
      display: flex;
      gap: 1.25rem;
      flex-direction: column;

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
    background-color: var(--lightBlue_1);
    min-height: fit-content;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    .hero__wrapper {
      width: 100%;
      max-width: 1200px;

      .hero__text {
        padding: 2rem;
        display: flex;
        gap: 1.25rem;
        flex-direction: column;
        height: 100%;
        width: 50%; //
        max-width: 400px;

        .hero__buttons {
          display: flex;
          gap: 1rem;
        }
      }
    }

    .hero__background {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      video {
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    .hero__background {
      video {
        width: 200%;
        margin-left: -100%;
      }
    }
    .hero__buttons {
      flex-wrap: wrap;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    .hero__background {
      video {
        width: 150%;
        margin-left: -50%;
      }
    }
  }
`;

function HeroSection() {
  const { checkingName } = useGlobalContext();

  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__text'>
          <Title>Build amazing products. Without the guesswork.</Title>
          <Paragraph>
            Product research shouldn't feel slow or complicated. Collect
            actionable user insights that fuel product decisions in hours, not
            days.
          </Paragraph>
          <div className='hero__buttons'>
            <Link to='/signup' role='button' onClick={checkingName}>
              <Button secondary text='Get started free' />
            </Link>
            <Link to='/' role='button' onClick={checkingName}>
              <Button outline text='Talk to sales' />
            </Link>
          </div>
        </div>
      </div>
      <div className='hero__background'>
        {/* <VideoTag src={HeroAnimation} poster='' />
         */}
        <video autoPlay loop muted>
          <source src={HeroAnimation} autoPlay loop muted />
        </video>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
