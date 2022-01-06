import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
const FaqElStyles = styled.article`
  .faqEl__wrapper {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--grey_1);
    gap: 2rem;

    &--question {
      display: flex;
      width: 100%;
      justify-content: space-between;
      cursor: pointer;
      h1 {
        max-width: 80%;
      }

      svg {
        width: 1.125rem;
        transition: 500ms;
      }

      &--active {
        svg {
          transform: rotate(-180deg);
        }
      }
    }

    &--answer {
    }
  }
`;
function FaqEl({ question, answer }) {
  const [activeFaqEl, setActiveFaqEl] = useState();

  return (
    <FaqElStyles>
      <div className='faqEl__wrapper'>
        <div
          className={
            activeFaqEl
              ? "faqEl__wrapper--question faqEl__wrapper--question--active"
              : "faqEl__wrapper--question"
          }
          onClick={() => {
            setActiveFaqEl(!activeFaqEl);
          }}>
          <Title small>{question}</Title>
          <AiOutlineDown />
        </div>
        {activeFaqEl ? (
          <div className='faqEl__wrapper--answer'>
            <Paragraph small>{answer}</Paragraph>
          </div>
        ) : (
          ""
        )}
      </div>
    </FaqElStyles>
  );
}

export default FaqEl;
