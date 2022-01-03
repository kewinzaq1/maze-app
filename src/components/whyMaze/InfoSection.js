import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const InfoSectionStyles = styled.section`
  .info__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .info__button {
      color: var(--white_1);

      &:hover {
        opacity: 0.8;
      }
    }

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.05rem;
      font-weight: 500;
    }

    &--text {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &Box {
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }
    }
  }

  @media (min-width: 768px) {
    .info__wrapper {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      max-width: 1200px;
      &--text {
        width: 50%;
        align-items: flex-start;
      }
      &--textBox {
        max-width: 600px;
      }

      &--video {
        width: 50%;
      }
    }
  }
`;

function InfoSection({
  video,
  title1,
  addInfo = false,
  title2,
  paragraph1,
  paragraph2,
  buttonCheck = false,
  buttonText = "Learn more",
  ...rest
}) {
  return (
    <InfoSectionStyles {...rest}>
      <div className='info__wrapper'>
        <div className='info__wrapper--text'>
          <div className='info__wrapper--textBox'>
            <Title>{title1}</Title>
            <Paragraph>{paragraph1}</Paragraph>
          </div>
          {addInfo ? (
            <div className='info__wrapper--textBox'>
              <Title>{title2}</Title>
              <Paragraph>{paragraph2}</Paragraph>
            </div>
          ) : (
            ""
          )}
          {buttonCheck ? (
            <Button text={buttonText} className='info__button' />
          ) : (
            ""
          )}
        </div>
        <div className='info__wrapper--video'>
          <video autoPlay muted loop>
            <source src={video} autoPlay muted loop />
          </video>
        </div>
      </div>
    </InfoSectionStyles>
  );
}

export default InfoSection;
