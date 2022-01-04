import React from "react";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import cms from "../../assets/enterpirce/goodHands/cms.png";
import onboarding from "../../assets/enterpirce/goodHands/onboarding.png";
import support from "../../assets/enterpirce/goodHands/support.png";
import styled from "styled-components";

const GoodHandsStyles = styled.section`
  padding: 5rem 0;
  img {
    width: 8rem;
  }
  .goodHands__wrapper {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    &--boxes {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5rem;

      .goodHands__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        max-width: 350px;
        text-align: center;
      }
    }
  }

  @media (min-width: 768px) {
    .goodHands__wrapper {
      &--boxes {
        flex-direction: row;
      }
    }
  }
`;

function GoodHands() {
  return (
    <GoodHandsStyles>
      <div className='goodHands__wrapper'>
        <div className='goodHands__wrapper--heading'>
          <Title secondary>You'll be in good hands</Title>
        </div>
        <div className='goodHands__wrapper--boxes'>
          <div className='goodHands__box'>
            <img src={cms} alt='' />
            <Title smLight>Dedicated CSM</Title>
            <Paragraph small>
              Make sure you get the most out of Maze with a single point of
              contact.
            </Paragraph>
          </div>
          <div className='goodHands__box'>
            <img src={onboarding} alt='' />
            <Title smLight>Tailored onboarding</Title>
            <Paragraph small>
              Onboarding that’s unique to your company and team goals.
            </Paragraph>
          </div>
          <div className='goodHands__box'>
            <img src={support} alt='' />
            <Title smLight>Priority support</Title>
            <Paragraph small>
              Receive dedicated support and guidance from our specialized team.
            </Paragraph>
          </div>
        </div>
      </div>
    </GoodHandsStyles>
  );
}

export default GoodHands;
