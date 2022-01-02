import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Title from "./Title";
import pManagersIcon from "../assets/services/productManagers.png";
import pDesingersIcon from "../assets/services/productDesigner.png";
import pMaketersIcon from "../assets/services/productMarketers.png";
import userResearchers from "../assets/services/userReasearchers.png";
import violet from "../assets/services/violet.png";
import orange from "../assets/services/orange.png";
import rose from "../assets/services/rose.png";
import green from "../assets/services/green.png";

import ServicesBox from "./ServicesBox";

const ServicesStyles = styled.section`
  .services__title {
    font-size: 2rem;
  }
  padding: 2rem;
  .services__wrapper {
    max-width: 1200px;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    &--header,
    &--footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }

    &--boxes {
      margin: 3rem 0;
      display: grid;
      gap: 2rem;
    }
  }

  @media (min-width: 768px) {
    .services__wrapper {
      &--boxes {
        margin: 10rem 0;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .serviceBox:nth-child(2n) {
      margin-top: 5rem;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesStyles>
      <div className='services__wrapper'>
        <div className='services__wrapper--header'>
          <Title className='services__title'>
            Empower your whole team with user insights
          </Title>
        </div>
        <div className='services__wrapper--boxes'>
          <ServicesBox
            className='serviceBox'
            icon={pManagersIcon}
            title='For Product Designers'
            text='Bring the end users voice to early product decisions and communicate easily with stakeholders.'
            background={violet}
          />
          <ServicesBox
            className='serviceBox'
            icon={pDesingersIcon}
            title='For Product Designers'
            text='Bring the end users voice to early product decisions and communicate easily with stakeholders.'
            background={orange}
          />
          <ServicesBox
            className='serviceBox'
            icon={pMaketersIcon}
            title='For Product Marketers'
            text='Bring the end users voice to early product decisions and communicate easily with stakeholders.'
            background={rose}
          />
          <ServicesBox
            className='serviceBox'
            icon={userResearchers}
            title='For User Researchers'
            text='Bring the end users voice to early product decisions and communicate easily with stakeholders.'
            background={green}
          />
        </div>
        <div className='services__wrapper--footer'>
          <Title className='services__title'>
            With Maze, anyone can test and learn rapidly
          </Title>
          <Button secondary text='Get started free' />
        </div>
      </div>
    </ServicesStyles>
  );
}

export default ServicesSection;
