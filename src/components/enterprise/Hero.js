import React from "react";
import styled from "styled-components";
// import { videoTagString, VideoTag } from "react-video-tag";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import HeroImg from "../../assets/enterpirce/hero.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import logo1 from "../../assets/enterpirce/brands/p1.png";
import logo2 from "../../assets/enterpirce/brands/p2.png";
import logo3 from "../../assets/enterpirce/brands/p3.png";
import logo4 from "../../assets/enterpirce/brands/p4.png";

const HeroStyles = styled.section`
  background-color: #295079;
  min-height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: var(--white_1);
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
        max-width: 600px;

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
      img {
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    .hero__background {
      img {
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
      img {
        width: 150%;
        margin-left: -50%;
      }
    }
  }

  .hero__images {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      filter: invert(100%);
    }
  }
  .hero__text--add {
    padding: 5rem 0;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    z-index: 999;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    .hero__text--add {
      padding: 3rem 0;
    }
  }
`;

function Hero() {
  const { checkingName } = useGlobalContext();

  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__text'>
          <Title>Make data-informed decisions at scale</Title>
          <Paragraph>
            Empower every team in your organization to test, learn, and act on
            valuable user insights that transform user-facing experiences for
            the better.
          </Paragraph>
          <div className='hero__buttons'>
            <Link to='/signup' role='button' onClick={checkingName}>
              <Button secondary text='Contact us' />
            </Link>
          </div>
        </div>
      </div>
      <div className='hero__background'>
        {/* <VideoTag src={HeroAnimation} poster='' />
         */}
        <img src={HeroImg} alt='heroImg' />
      </div>
      <div className='hero__text--add'>
        <Title>Trusted by 40,000+ brands</Title>
        <div className='hero__images'>
          <img src={logo1} alt='l1' />
          <img src={logo2} alt='l2' />
          <img src={logo3} alt='l3' />
          <img src={logo4} alt='l4' />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
