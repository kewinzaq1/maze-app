import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Title from "./Title";

const AboutBoxStyle = styled.article`
  .aboutBox__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .aboutBox__video {
      width: 100%;
      height: 400px;
      video {
        border-radius: 2rem;
      }
    }

    .aboutBox__text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .aboutBox__title {
      margin-top: 1rem;
      font-size: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .aboutBox__wrapper {
      flex-direction: row;

      .aboutBox__video {
        width: 50%;
      }
      .aboutBox__text {
        width: 50%;
      }
    }
  }
`;

function AboutBox({ video, title, text, ...rest }) {
  return (
    <AboutBoxStyle {...rest}>
      <div className='aboutBox__wrapper'>
        <div className='aboutBox__video'>
          <video
            preload='true'
            playsInline
            muted
            autoPlay
            disablePictureInPicture>
            <source
              src={video}
              preload='true'
              playsInline
              muted
              autoPlay
              disablePictureInPicture
            />
          </video>
        </div>
        <div className='aboutBox__text'>
          <Title className='aboutBox__title'>{title}</Title>
          <Paragraph>{text}</Paragraph>
          <Button outline text='Learn more' />
        </div>
      </div>
    </AboutBoxStyle>
  );
}

export default AboutBox;
