import React from "react";
import styled from "styled-components";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const ManifestioStyles = styled.section`
  padding: 5rem 0;
  .manifesto__wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: center;
    gap: 3rem;
    text-align: center;
  }
`;

function Manifesto() {
  return (
    <ManifestioStyles>
      <div className='manifesto__wrapper'>
        <Title>Community Manifesto</Title>
        <Paragraph>
          Whether you're a product manager, a design enthusiast, or completely
          new to the field and want to learn alongside us—this space is for you.
          We all have the power to achieve a-maze-ing things when we work
          together, and we're here to encourage that. So share your stories,
          make meaningful connections, and enjoy new experiences along the way.
        </Paragraph>
        <Paragraph>
          Welcome to our community—we're very happy to have you with us.
        </Paragraph>
      </div>
    </ManifestioStyles>
  );
}

export default Manifesto;
