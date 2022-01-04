import React from "react";
import meetImg from "../../assets/enterpirce/meet/image.png";
import Title from "../../components/shared/Title";
import Paragraph from "../../components/shared/Paragraph";
import Button from "../../components/shared/Button";
import styled from "styled-components";
import bg from "../../assets/enterpirce/meet/background.png";

const ReportsStyles = styled.section`
  background: url(${bg});
  background-color: #f8f9fa;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem 0;

  .reports__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
    &--text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
      max-width: 500px;
    }
  }

  @media (min-width: 768px) {
    .reports__wrapper {
      flex-direction: row;
    }
  }
`;

function Reports() {
  return (
    <ReportsStyles>
      <div className='reports__wrapper'>
        <div className='reports__wrapper--image'>
          <img src={meetImg} alt='meet' />
        </div>
        <div className='reports__wrapper--text'>
          <Title small>Meet Maze Reports</Title>
          <Paragraph>
            Communicate key insights in no time with beautifully-packaged Maze
            Reports that calculate unique usability scores and empower
            collaboration with comments and customizable components.
          </Paragraph>
          <Button outline text='Learn more' pad1 />
        </div>
      </div>
    </ReportsStyles>
  );
}

export default Reports;
