import React, { useState } from "react";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import { VscCircleLargeFilled } from "react-icons/vsc";
import styled from "styled-components";
import PlanBox from "./PlanBox";

import bg1 from "../../assets/pricing/pricingBox/bg1.svg";
import bg2 from "../../assets/pricing/pricingBox/bg2.svg";
import bg3 from "../../assets/pricing/pricingBox/bg3.svg";

const HeroStyles = styled.section`
  padding: 5rem 0;
  .hero__wrapper {
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;

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
          transition: 1s;
          svg {
            font-size: 1.5rem;
            color: var(--white_1);
            transform: translatex(-60%);
            transition: 500ms;
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
    &--pricingBoxes {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 80%;
      margin: 5rem auto;

      .dark {
        .planBox__wrapper {
          background-color: #202938;
          color: #fff;
          .planBox__button {
            background-color: #f9b972;
            color: var(--white_1);

            &:hover {
              border-color: transparent;
              opacity: 0.8;
            }
          }
          svg {
            color: #f9b972;
          }
        }
      }

      .hero__box:nth-child(1) {
        .planBox__wrapper {
          background-image: url(${bg1});
        }
      }
      .hero__box:nth-child(2) {
        .planBox__wrapper {
          background-image: url(${bg2});
        }
      }
      .hero__box:nth-child(3) {
        .planBox__wrapper {
          background-image: url(${bg3});
        }
      }
    }
    @media (min-width: 1024px) {
      &--pricingBoxes {
        flex-direction: row;
      }
    }
  }
`;

function Hero() {
  const freeFeaturesList = [
    "1 active project",
    "100 responses/month",
    "Up to 7 blocks",
    "Integrations",
    "Atuomated Maze Report",
  ];
  const professionalFeaturesList = [
    "10 active projects",
    "250 responses/month",
    "Unlimited blocks",
    "Password protection",
    "CSV export",
    "Pro Templates",
    "Unlimited Filters",
    "Unlimited Collaborators",
    "Team managment",
    "Brand Customization",
  ];
  const oragnitiesFuturesList = [
    "Unlimited projects",
    "Up to Unlimited responses",
    "Legal blocks",
    "Dedicated CSM",
    "Enterpise-grade secutirty",
    "Priorty support",
    "Custom payment terms",
  ];

  const [isYearly, setIsYearly] = useState(false);

  return (
    <HeroStyles>
      <div className='hero__wrapper'>
        <div className='hero__wrapper--heading'>
          <Title small>Flexible pricing for agile teams</Title>
          <Paragraph small>
            Whether you’re just getting started with rapid testing or scaling
            across the organization, we’ve got you covered.
          </Paragraph>
          <div
            className='hero__switcher'
            role='button'
            onClick={() => {
              setIsYearly(!isYearly);
            }}>
            <div className='hero__switcher--text'>
              <Paragraph small className='hero__switcher--paragraph'>
                Monthly Billing
              </Paragraph>
            </div>
            <div
              className={
                isYearly
                  ? "hero__switcher--switcher active"
                  : "hero__switcher--switcher"
              }>
              <VscCircleLargeFilled className='hero__switcher--circle' />
            </div>
            <div className='hero__switcher--text'>
              <Paragraph small className='hero__switcher--paragraph'>
                Yearly Billing
              </Paragraph>
            </div>
          </div>
        </div>
        <div className='hero__wrapper--pricingBoxes'>
          <PlanBox
            name='Free
            '
            description='Explore Maze together, for free'
            price='$0'
            billed='/month'
            seats='1+ seats'
            buttonText='Get started free'
            featuresHeading='Free feature'
            featuresList={freeFeaturesList}
            className='hero__box'
          />
          <PlanBox
            name='Professional'
            description='Bring actionable insights to the whole team'
            price={isYearly ? "$50" : "$66"}
            billed={isYearly ? "/month, billed annually" : "/month"}
            seats='2 seats included'
            buttonText='Get started'
            featuresHeading='All Free features, plus'
            featuresList={professionalFeaturesList}
            className='hero__box dark'
          />
          <PlanBox
            name='Organization'
            description='Scale rapid testing company wide'
            price='Lets chat'
            billed='Custom pricing'
            seats='Starting from 10 seats'
            buttonText='Contact us'
            featuresHeading='All Professional features, plus'
            featuresList={oragnitiesFuturesList}
            className='hero__box '
          />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
