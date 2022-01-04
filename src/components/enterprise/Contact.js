import React from "react";
import TItle from "../../components/shared/Title";
import Button from "../../components/shared/Button";
import styled from "styled-components";

const ContactStyles = styled.section`
  padding: 10rem 0;
  .contact__wrapper {
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    text-align: center;
    gap: 2rem;
  }
`;

function Contact() {
  return (
    <ContactStyles>
      <div className='contact__wrapper'>
        <TItle>Modern, agile teams move faster with Maze</TItle>
        <Button secondary text='Contact us' pad1 />
      </div>
    </ContactStyles>
  );
}

export default Contact;
