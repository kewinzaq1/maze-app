import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Title from "../shared/Title";

import i1 from "../../assets/enterpirce/features/feature1.png";
import i2 from "../../assets/enterpirce/features/feature2.png";
import i3 from "../../assets/enterpirce/features/feature3.png";
import i4 from "../../assets/enterpirce/features/feature4.png";
import InfoBox from "./InfoBox";

const InfoStyles = styled.section`
  padding: 5rem 0;
  .info__wrapper {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    &--boxes {
      display: grid;
      align-items: center;
      align-content: center;
      justify-content: center;
      justify-items: center;
      gap: 2rem;
    }
    &--text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      text-align: center;
      max-width: 600px;
      margin: 0 auto;

      .info__button {
        padding: 0.85rem;
      }
    }
  }

  @media (min-width: 768px) {
    .info__wrapper--boxes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

function Info() {
  return (
    <InfoStyles>
      <div className='info__wrapper'>
        <div className='info__wrapper--text'>
          <Title secondary>
            The rapid testing platform that enables teams to gather actionable
            insights, in hours not days
          </Title>
          <Button outline text='Request a call' className='info__button' />
        </div>
        <div className='info__wrapper--boxes'>
          <InfoBox
            image={i1}
            title='True cross-company collaboration'
            text='Open up the testing process company-wide with an intuitive platform made for collaboration.'
          />
          <InfoBox
            image={i2}
            title='Enterprise-level security'
            text='Our industry-recognized SOC 2 Type II certification means you can work safely, securely, and confidently with Maze.'
          />
          <InfoBox
            image={i3}
            title='Dedicated CSM and priority support'
            text='Reach your goals with our specialized team working alongside you, every step of the way.'
          />
          <InfoBox
            image={i4}
            title='Brand customization'
            text='Customize elements of your mazes to create a branded user experience.'
          />
        </div>
      </div>
    </InfoStyles>
  );
}

export default Info;
