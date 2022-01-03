import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Title from "../shared/Title";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const TrySectionStyles = styled.section`
  padding: 5rem 0;
  .try__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    .try__button {
      padding: 1.25rem;
    }
  }
`;

function TrySection() {
  const { checkingName } = useGlobalContext();
  return (
    <TrySectionStyles>
      <div className='try__wrapper'>
        <Title>Try rapid testing now, for free</Title>
        <Link to='/signup' role='button' onClick={checkingName}>
          <Button secondary text='Get started free' className='try__button' />
        </Link>
      </div>
    </TrySectionStyles>
  );
}

export default TrySection;
