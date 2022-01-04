import React from "react";
import styled from "styled-components";

import bg from "../../assets/enterpirce/security/background.png";
import Button from "../shared/Button";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";

import compilance from "../../assets/enterpirce/security/icons/compilance.svg";
import dataCenter from "../../assets/enterpirce/security/icons/dataCenter.svg";
import encrypted from "../../assets/enterpirce/security/icons/encrypted.svg";
import legalBlock from "../../assets/enterpirce/security/icons/legalBlock.svg";
import protectedd from "../../assets/enterpirce/security/icons/protected.svg";
import sso from "../../assets/enterpirce/security/icons/sso.svg";

const SecurityStyles = styled.section`
  background-image: url(${bg});
  background-color: #173960;
  background-position: top right 20%;
  background-size: 40vw;
  background-repeat: no-repeat;
  padding: 5rem 0;
  .security__wrapper {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &--heading {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    &--boxes {
      margin-top: 3rem;
      color: var(--white_1);
      display: grid;
      gap: 5rem;
      .serurity__box {
        img {
          width: 20px;
        }

        .inline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .security__wrapper {
      &--boxes {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media (min-width: 1024px) {
    .security__wrapper {
      &--boxes {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

function Security() {
  return (
    <SecurityStyles>
      <div className='security__wrapper'>
        <div className='security__wrapper--heading'>
          <Title white secondary>
            Enterprise Grade Security
          </Title>
          <Button outlineWhite white pad1 text='Contact us' />
        </div>
        <div className='security__wrapper--boxes'>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={encrypted} alt='' />
              <Title small white>
                Encrypted transmission
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={dataCenter} alt='' />
              <Title small white>
                Data center security
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={sso} alt='' />
              <Title small white>
                SSO
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={protectedd} alt='' />
              <Title small white>
                Link-protected access
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={compilance} alt='' />
              <Title small white>
                Compliance
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
          <div className='serurity__box'>
            <div className='inline'>
              <img src={legalBlock} alt='' />
              <Title small white>
                Legal Block
              </Title>
            </div>
            <Paragraph small>
              All traffic, including user data, is transported securely and
              encrypted via SSL.
            </Paragraph>
          </div>
        </div>
      </div>
    </SecurityStyles>
  );
}

export default Security;
