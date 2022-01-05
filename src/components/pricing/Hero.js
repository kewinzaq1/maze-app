import React from "react";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import { VscCircleLargeFilled } from "react-icons/vsc";
import styled from "styled-components";

const HeroStyles = styled.section`
  padding: 5rem 0;
  .hero__wrapper {
    padding: 2rem;

    &--heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1rem;

      .hero__switcher {
        display: flex;
        gap: 1.25rem;
        margin-top: 1rem;
        align-items: center;

        &--switcher {
          background: var(--grey_1);
          border-radius: 2rem;
          padding: 0.2rem 1.2rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          svg {
            font-size: 1.5rem;
            color: var(--white_1);
            transform: translatex(-60%);
          }

          &.active {
            background: var(--blue_1);

            svg {
              transform: translatex(60%);
            }
          }
        }
      }
    }
  }
`;

function Hero() {
  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__wrapper--heading'>
          <Title small>Flexible pricing for agile teams</Title>
          <Paragraph small>
            Whether you’re just getting started with rapid testing or scaling
            across the organization, we’ve got you covered.
          </Paragraph>
          <div className='hero__switcher'>
            <div className='hero__switcher--text'>
              <Paragraph small className='hero__switcher--paragraph'>
                Monthly Billing
              </Paragraph>
            </div>
            <div className='hero__switcher--switcher'>
              <VscCircleLargeFilled className='hero__switcher--circle' />
            </div>
            <div className='hero__switcher--text'>
              <Paragraph small className='hero__switcher--paragraph'>
                Yearly Billing
              </Paragraph>
            </div>
          </div>
        </div>
        <div className='hero__wrapper--pricingBoxes'></div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
