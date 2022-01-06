import React from "react";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import BigImage from "../../assets/comunity/posts/postBig.png";
import small1 from "../../assets/comunity/posts/small1.avif";
import small2 from "../../assets/comunity/posts/small2.avif";
import small3 from "../../assets/comunity/posts/small3.png";
import PostBig from "./PostBig";
import PostSmall from "./PostSmall";

const ConversationStyles = styled.section`
  padding: 5rem 0;
  .conversation__wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;

    &--heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }

      svg {
        width: 1rem;
        color: var(--blue_1);
      }
    }

    &--posts {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }
      gap: 2rem;

      .smalls {
        display: flex;
        gap: 2rem;

        flex-direction: column;
      }
    }
  }
  @media (min-width: 768px) {
    .smalls {
      width: 40%;
      justify-content: space-between;
    }
    .big {
      width: 60%;
    }
  }
`;
function Conversation() {
  return (
    <ConversationStyles>
      <div className='conversation__wrapper'>
        <div className='conversation__wrapper--heading'>
          <Title>Conversation</Title>
          <Paragraph>
            View all <AiOutlineRight />
          </Paragraph>
        </div>
        <div className='conversation__wrapper--posts'>
          <div className='big'>
            <PostBig
              img={BigImage}
              text='Continuous discovery: Making better product decisions with Teresa Torres'
              date='Dec 9, 2021'
            />
          </div>
          <div className='smalls'>
            <PostSmall
              img={small1}
              text='From designer to founder with Jeremy Le Van, co-founder of Sunrise and former Director of Design at Microsoft'
              date='Dec 9, 2021'
            />
            <PostSmall
              img={small2}
              text='Continuous learning: Using human insight to build remarkable products with Jason Giles'
              date='Dec 5, 2021'
            />
            <PostSmall
              img={small3}
              text="On failing and learning: Inside Webflow's design process with David Hoang"
              date='Nov 24, 2021'
            />
          </div>
        </div>
      </div>
    </ConversationStyles>
  );
}

export default Conversation;
