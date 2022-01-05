import React, { useState } from "react";
import styled from "styled-components";
import brazelogo from "../../assets/pricing/testiSlider/brazelogo.png";
import futuricelogo from "../../assets/pricing/testiSlider/futuricelogo.png";
import samsunglogo from "../../assets/pricing/testiSlider/samsunglogo.png";
import generalelectriclogo from "../../assets/pricing/testiSlider/generalelectriclogo.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Paragraph from "../shared/Paragraph";

const TestiSliderStyles = styled.div`
  .testiSlider__mobile {
    width: 100%;
    display: flex;
    position: relative;
    width: 30rem;
    &--text {
      width: 70%;
      position: absolute;
    }
    &--controls {
      width: 30%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      position: absolute;
      right: 0;
      gap: 1rem;
      .button__left,
      .button__right {
        border: 3px solid #5e5c5c65;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 1.3rem;
          color: #3d3c3ceb;
          padding: 0.5rem;
          cursor: pointer;
        }
      }
    }

    .hide-1 {
      transform: translateX(-300vw);
    }
    .hide-2 {
      transform: translateX(-200vw);
    }
    .hide-3 {
      transform: translateX(-100vw);
    }
    .show0,
    .show1,
    .show2,
    .show3,
    .show4,
    .show5 {
      transform: translateX(0vw) !important;
    }

    .brand__logo {
      width: 150px;
      height: 80px;
    }
  }
`;
function TestiSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideIncrease = () => {
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
    console.log(currentSlide);
  };
  const slideDecrease = () => {
    if (currentSlide >= 1) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 1) {
      setCurrentSlide(0);
    }
    console.log(currentSlide);
  };

  return (
    <TestiSliderStyles>
      <div className='testiSlider__mobile'>
        <div
          className={`testiSlider__mobile--text ${
            currentSlide === 0 ? "show" : "hide-"
          }${currentSlide}`}>
          <img src={brazelogo} alt='braze' className='brand__logo' />
          <Paragraph className='testiSlider__quots'>
            "Using Maze has supercharged our product design process and made it
            possible to drive faster turnaround times, speeding up product
            iteration and making for a better, faster user experience."
          </Paragraph>
          <Paragraph className='testiSlider__author'>
            Yuna Akazawa, Product Designer at Braze
          </Paragraph>
        </div>
        <div
          className={`testiSlider__mobile--text ${
            currentSlide === 1 ? "show" : "hide-"
          }${currentSlide + 1}`}>
          <img src={futuricelogo} alt='braze' className='brand__logo' />
          <Paragraph className='testiSlider__quots'>
            "Using Maze has supercharged our product design process and made it
            possible to drive faster turnaround times, speeding up product
            iteration and making for a better, faster user experience."
          </Paragraph>
          <Paragraph className='testiSlider__author'>
            Yuna Akazawa, Product Designer at Braze
          </Paragraph>
        </div>
        <div
          className={`testiSlider__mobile--text ${
            currentSlide === 2 ? "show" : "hide-"
          }${currentSlide + 2}`}>
          <img src={samsunglogo} alt='braze' className='brand__logo' />
          <Paragraph className='testiSlider__quots'>
            "Using Maze has supercharged our product design process and made it
            possible to drive faster turnaround times, speeding up product
            iteration and making for a better, faster user experience."
          </Paragraph>
          <Paragraph className='testiSlider__author'>
            Yuna Akazawa, Product Designer at Braze
          </Paragraph>
        </div>
        <div
          className={`testiSlider__mobile--text ${
            currentSlide === 3 ? "show" : "hide-"
          }${currentSlide + 3}`}>
          <img src={generalelectriclogo} alt='braze' className='brand__logo' />
          <Paragraph className='testiSlider__quots'>
            "Using Maze has supercharged our product design process and made it
            possible to drive faster turnaround times, speeding up product
            iteration and making for a better, faster user experience."
          </Paragraph>
          <Paragraph className='testiSlider__author'>
            Yuna Akazawa, Product Designer at Braze
          </Paragraph>
        </div>
        <div className='testiSlider__mobile--controls'>
          <div className='button__left' role='button' onClick={slideDecrease}>
            <AiOutlineArrowLeft />
          </div>
          <div className='button__right' role='button' onClick={slideIncrease}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </TestiSliderStyles>
  );
}

export default TestiSlider;
