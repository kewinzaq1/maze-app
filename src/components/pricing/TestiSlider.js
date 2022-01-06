import React, { useState } from "react";
import styled from "styled-components";
import brazelogo from "../../assets/pricing/testiSlider/brazelogo.png";
import futuricelogo from "../../assets/pricing/testiSlider/futuricelogo.png";
import samsunglogo from "../../assets/pricing/testiSlider/samsunglogo.png";
import generalelectriclogo from "../../assets/pricing/testiSlider/generalelectriclogo.png";
import brazePerson from "../../assets/pricing/testiSlider/brandsPerson/braze.png";
import futuricePerson from "../../assets/pricing/testiSlider/brandsPerson/futurice.png";
import otherPerson from "../../assets/pricing/testiSlider/brandsPerson/other.png";
import samsungPerson from "../../assets/pricing/testiSlider/brandsPerson/samsung.png";
import Paragraph from "../shared/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const TestiSliderStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
    display: flex;
    align-items: center;
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
      width: 100%;
      padding: 2rem;
      &El {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 100%;
      }
    }

    &--controls {
      position: absolute;
      right: 2rem;
      display: flex;
      padding-top: 5rem;
      align-items: flex-start;
      justify-content: flex-end;
      height: 25rem;
      width: 50%;
      gap: 1rem;
      z-index: 9999;

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

  .testiSlider__desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 35rem;
  }

  .testiSlider__desktop--swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    &El {
      display: flex;
      background: #ffe6d0;
      .testiSlider__text {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;

        width: 50%;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .testiSlider__image {
        width: 50%;
        height: 100%;
        object-fit: cover;
        img {
          width: 80%;
          object-fit: cover;
        }
      }
    }
  }

  .testiSlider__desktop--pagination {
    border-top: 2px solid #1111111a;
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10rem;
    justify-content: center;
    img {
      object-fit: contain;
      width: 100px;
    }

    img:last-child {
      width: 55px;
      height: 55px;
    }

    .swiper-pagination-bullet {
      opacity: 0.4;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &-active {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1024px) {
    .testiSlider__desktop {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .testiSlider__mobile {
      display: none;
    }
    .testiSlider__desktop {
      display: flex;
    }
  }
`;
function TestiSlider() {
  return (
    <TestiSliderStyles>
      <div className='testiSlider__mobile'>
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
              variations.”
            </Paragraph>
            <Paragraph className='testiSlider__author'>
              Joahim Shonert, CEO Furutice
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
              Nicolas Beaudin, Product Design Menager | Samsung Ads
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
              Melany Valdemama, Senior Interaction Designer at GE
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
      <div className='testiSlider__desktop'>
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".testiSlider__desktop--pagination",
            clickable: true,
            renderBullet: function (index, className) {
              if (index === 0) {
                return `<img src=${brazelogo} class=${className}>`;
              }
              if (index === 1) {
                return `<img src=${futuricelogo} class=${className}>`;
              }
              if (index === 2) {
                return `<img src=${samsunglogo} class=${className}>`;
              }
              if (index === 3) {
                return `<img src=${generalelectriclogo} class=${className}>`;
              }
              // return `<img src=${imagesBrands} alt="" class=${className} />`;
              // return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
            },
          }}
          loop={true}
          className='testiSlider__desktop--swiper'>
          <SwiperSlide className='testiSlider__desktop--swiperEl'>
            <div className='testiSlider__image'>
              <img src={brazePerson} alt='braze-person' />
            </div>
            <div className='testiSlider__text'>
              <div className='testi__brandBox'>
                <img
                  src={brazelogo}
                  alt='braze'
                  className='brand__logo--braze'
                />
              </div>
              <Paragraph className='testiSlider__quots'>
                "Using Maze has supercharged our product design process and made
                it possible to drive faster turnaround times, speeding up
                product iteration and making for a better, faster user
                experience."
              </Paragraph>
              <Paragraph className='testiSlider__author'>
                Yuna Akazawa, Product Designer at Braze
              </Paragraph>
            </div>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__desktop--swiperEl'>
            <div className='testiSlider__image'>
              <img src={futuricePerson} alt='futurice-person' />
            </div>
            <div className='testiSlider__text'>
              <div className='testi__brandBox'>
                <img
                  src={futuricelogo}
                  alt='braze'
                  className='brand__logo--futurice'
                />
              </div>
              <Paragraph className='testiSlider__quots'>
                “Now everyone is taking the reins and are able to set up tests
                on their own - making the designs themselves to run different
                variations.” "
              </Paragraph>
              <Paragraph className='testiSlider__author'>
                Joahim Shonert, CEO Furutice
              </Paragraph>
            </div>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__desktop--swiperEl'>
            <div className='testiSlider__image'>
              <img src={samsungPerson} alt='generalelectric-person' />
            </div>
            <div className='testiSlider__text'>
              <div className='testi__brandBox'>
                <img
                  src={samsunglogo}
                  alt='samsung'
                  className='brand__logo--samsung'
                />
              </div>
              <Paragraph className='testiSlider__quots'>
                “Now everyone is taking the reins and are able to set up tests
                on their own - making the designs themselves to run different
                variations.”
              </Paragraph>
              <Paragraph className='testiSlider__author'>
                Nicolas Beaudin, Product Design Menager | Samsung Ads
              </Paragraph>
            </div>
          </SwiperSlide>
          <SwiperSlide className='testiSlider__desktop--swiperEl'>
            <div className='testiSlider__image'>
              <img src={otherPerson} alt='generalelectric-person' />
            </div>
            <div className='testiSlider__text'>
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
                Melany Valdemama, Senior Interaction Designer at GE
              </Paragraph>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='testiSlider__desktop--pagination'>
          <div className='testi__brandBox'>
            <img src={brazelogo} alt='braze' className='brand__logo--braze' />
          </div>
          <div className='testi__brandBox'>
            <img
              src={futuricelogo}
              alt='braze'
              className='brand__logo--futurice'
            />
          </div>
          <div className='testi__brandBox'>
            <img
              src={samsunglogo}
              alt='braze'
              className='brand__logo--samsung'
            />
          </div>
          <div className='testi__brandBox'>
            <img
              src={generalelectriclogo}
              alt='braze'
              className='brand__logo--other'
            />
          </div>
        </div>
      </div>
    </TestiSliderStyles>
  );
}

export default TestiSlider;
