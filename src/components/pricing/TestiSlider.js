import React, { useState } from "react";
import styled from "styled-components";
import brazelogo from "../../assets/pricing/testiSlider/brazelogo.png";
import futuricelogo from "../../assets/pricing/testiSlider/futuricelogo.png";
import samsunglogo from "../../assets/pricing/testiSlider/samsunglogo.png";
import generalelectriclogo from "../../assets/pricing/testiSlider/generalelectriclogo.png";
import Paragraph from "../shared/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "swiper/css";

import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const TestiSliderStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .testiSlider__mobile {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

    &--swiper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 60%;
      height: 30rem;

      &El {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 100%;
      }
    }

    &--controls {
      display: flex;
      padding-top: 5rem;
      align-items: flex-start;
      justify-content: flex-end;
      width: 30%;
      gap: 1rem;
      height: 30rem;

      .prevBtn,
      .nextBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem;
        border-radius: 50%;
        border: 2px solid var(--grey_1);
        cursor: pointer;
        transition: 250ms;

        &:active {
          border-color: var(--black_1);
        }
      }
    }
  }

  .brand__logo--braze {
    width: 100px;
    height: 70px;
  }
  .brand__logo--futurice {
    width: 100px;
    height: 25px;
  }
  .brand__logo--samsung {
    width: 100px;
    height: 60px;
  }
  .brand__logo--other {
    width: 60px;
    height: 60px;
  }
  .testi__brandBox {
    width: 100px;
    height: 100px;
  }
  .testiSlider__quots {
    font-weight: 500;
    font-size: 1rem;
  }
  .testiSlider__author {
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2rem;
    opacity: 0.6;
  }

  .testiSlider {
    z-index: 9999;
  }
`;
function TestiSlider() {
  return (
    <TestiSliderStyles>
      <div className='testiSlider__mobile'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          loop={true}
          className='testiSlider__mobile--swiper'>
          <SwiperSlide className='testiSlider__mobile--swiperEl'>
            {/* className={`testiSlider__mobile--text one ${
              currentSlide === 0 ? "show" : "hide"
            }`}> */}
            <div className='testi__brandBox'>
              <img src={brazelogo} alt='braze' className='brand__logo--braze' />
            </div>
            <Paragraph className='testiSlider__quots'>
              "Using Maze has supercharged our product design process and made
              it possible to drive faster turnaround times, speeding up product
              iteration and making for a better, faster user experience."
            </Paragraph>
            <Paragraph className='testiSlider__author'>
              Yuna Akazawa, Product Designer at Braze
            </Paragraph>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__mobile--swiperEl'>
            <div className='testi__brandBox'>
              <img
                src={futuricelogo}
                alt='braze'
                className='brand__logo--futurice'
              />
            </div>
            <Paragraph className='testiSlider__quots'>
              “Now everyone is taking the reins and are able to set up tests on
              their own - making the designs themselves to run different
              variations.” "
            </Paragraph>
            <Paragraph className='testiSlider__author'>
              Yuna Akazawa, Product Designer at Braze
            </Paragraph>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__mobile--swiperEl'>
            <div className='testi__brandBox'>
              <img
                src={samsunglogo}
                alt='braze'
                className='brand__logo--samsung'
              />
            </div>
            <Paragraph className='testiSlider__quots'>
              “Through Maze Discovery, we were able to reach about 70% of our
              internal users to validate which KPIs and metrics would be
              required on our new dashboards.”
            </Paragraph>
            <Paragraph className='testiSlider__author'>
              Yuna Akazawa, Product Designer at Braze
            </Paragraph>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__mobile--swiperEl'>
            <div className='testi__brandBox'>
              <img
                src={generalelectriclogo}
                alt='braze'
                className='brand__logo--other'
              />
            </div>
            <Paragraph className='testiSlider__quots'>
              "Hands down the best tool on the market for user research and
              prototype validation."
            </Paragraph>
            <Paragraph className='testiSlider__author'>
              Yuna Akazawa, Product Designer at Braze
            </Paragraph>
          </SwiperSlide>
        </Swiper>
        <div className='testiSlider__mobile--controls'>
          <div className='prevBtn'>
            <BsArrowLeft className='prevBtn--icon' />
          </div>
          <div className='nextBtn'>
            <BsArrowRight className='prevBtn--icon' />
          </div>
        </div>
      </div>
    </TestiSliderStyles>
  );
}

export default TestiSlider;
