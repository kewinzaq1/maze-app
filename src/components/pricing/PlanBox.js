import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import Button from "../shared/Button";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const PlanBoxStyles = styled.div`
  flex-basis: 100%;

  .planBox__wrapper {
    display: flex;
    flex-direction: column;
    background: #f3f7ff;
    color: var(--black_1);
    width: 80%;
    margin: 0 auto;
    border-radius: 1.125rem;
    padding: 2rem;
    gap: 2rem;
    height: 100%;
    width: 100%;
    height: 100%;
    background-size: cover;
    svg {
      width: 1.5rem;
      color: var(--blue_1);
    }

    &--heading {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;

      .planBox__inline {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
      }

      h1 {
        display: flex;
        flex-direction: column;
      }
      h1 span {
        font-weight: 400;
        opacity: 0.8;
        font-size: 1rem;
        margin-top: -0.5rem;
      }
    }

    &--features {
      p {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

function PlanBox({
  name,
  description,
  price,
  billed,
  seats,
  buttonText,
  featuresHeading,
  featuresList,
  ...rest
}) {
  return (
    <PlanBoxStyles {...rest}>
      <div className='planBox__wrapper'>
        <div className='planBox__wrapper--heading'>
          <Title small>{name}</Title>
          <Paragraph small>{description}</Paragraph>
          <Title secondary>
            {price} <span>{billed}</span>
          </Title>
          <div className='planBox__inline'>
            <BsFillPersonPlusFill /> <Paragraph small>{seats}</Paragraph>
          </div>
          <Button outline text={buttonText} className='planBox__button' />
        </div>
        <div className='planBox__wrapper--features'>
          <Paragraph small>{featuresHeading}</Paragraph>
          <ul>
            {featuresList.map((feature, index) => (
              <li key={index}>
                <AiOutlineCheck />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PlanBoxStyles>
  );
}

export default PlanBox;
