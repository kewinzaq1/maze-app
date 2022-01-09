import React from "react";
import data from "../../assets/pricing/FAQ/data";
import FaqEl from "./FaqEl";
import styled from "styled-components";
import Icon from "../../assets/pricing/FAQ/icon.png";
import Title from "../../components/shared/Title";

const FAQStyles = styled.section`
  padding: 10rem 0;
  .faq__wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    &--heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      img {
        width: 150px;
      }
    }

    &--faqs {
      margin-top: 5rem;
    }
  }
`;
function FAQ() {
  return (
    <FAQStyles>
      <div className='faq__wrapper'>
        <div className='faq__wrapper--heading'>
          <img src={Icon} alt='faq' />
          <Title secondary>Frequently asked questions</Title>
        </div>
        <div className='faq__wrapper--faqs'>
          {data.map((element, index) => {
            const { question, answer } = element;
            return <FaqEl key={index} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </FAQStyles>
  );
}

export default FAQ;
