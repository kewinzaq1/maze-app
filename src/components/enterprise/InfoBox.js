import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const InfoBoxStyles = styled.div`
  .infoBox__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &--text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-align: center;
    }
  }
`;

function InfoBox({ image, title, text }) {
  return (
    <InfoBoxStyles>
      <div className='infoBox__wrapper'>
        <div className='infoBox__wrapper--image'>
          <img src={image} alt={title} />
        </div>
        <div className='infoBox__wrapper--text'>
          <Title small>{title}</Title>
          <Paragraph small>{text}</Paragraph>
        </div>
      </div>
    </InfoBoxStyles>
  );
}

export default InfoBox;
