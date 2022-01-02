import React from "react";
import Title from "./Title";
import Button from "./Button";
import styled from "styled-components";
import testAnimation from "../assets/about/testAnywhere.mp4";
import designedAnimation from "../assets/about/madeForEveryWorkflow.mp4";
import testingAnimation from "../assets/about/testingTeamSport.mp4";
import dataAnimation from "../assets/about/meaningfulReport.mp4";
import AboutBox from "./AboutBox";

const AboutSectionStyles = styled.section`
  padding: 2rem;
  .about__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    &--header,
    &--footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 2rem;
      max-width: 600px;
      margin: 0 auto;

      .about__title {
        font-size: 2rem;
      }
    }

    &--boxes {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      margin: 10rem auto;
    }
  }

  @media (min-width: 1024px) {
    .box:nth-child(2n) {
      .aboutBox__wrapper {
        flex-direction: row-reverse;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className='about__wrapper'>
        <div className='about__wrapper--header'>
          <Title className='about__title'>
            Get user insights you can act on instantly
          </Title>
        </div>
        <div className='about__wrapper--boxes'>
          <AboutBox
            className='box'
            video={testAnimation}
            title='Test anywhere, anytime'
            text='Easily create a maze for every project need—from usability tests to user surveys. Then share it with users across the globe using a unique URL in just minutes.'
          />
          <AboutBox
            className='box'
            video={designedAnimation}
            title='Designed with your workflow in mind'
            text='Seamlessly integrate with leading design platforms like Figma, InVision, Adobe XD, Marvel, and Sketch and accelerate your process from idea to test.'
          />
          <AboutBox
            className='box'
            video={testingAnimation}
            title='Make testing a team sport'
            text='Keep your team in the loop. Collaborate with stakeholders in Maze—and watch meaningful insights fuel business growth and drive product decisions.'
          />
          <AboutBox
            className='box'
            video={dataAnimation}
            title='Beautiful, data-packed reports in a click'
            text='Eliminate hours of work watching recordings with test results that are instantly translated into metrics that matter. Then share with stakeholders as a beautifully-packaged, actionable report.'
          />
        </div>
        <div className='about__wrapper--footer'>
          <Title className='about__title'>
            Rapid testing. Optimized for results, designed for humans.
          </Title>
          <Button secondary text='Learn more' />
        </div>
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection;
