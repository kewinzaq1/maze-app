import React from "react";
import styled from "styled-components";

const PostBigStyles = styled.article`
  border-bottom: 1px solid var(--grey_1);
  padding-bottom: 1rem;
  .postBig__wrapper {
    display: flex;
    flex-direction: column;
    img {
      border-radius: 2rem;
      max-height: 20rem;
      object-fit: cover;
    }

    .postBig__text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h1 {
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        font-weight: 600;
        opacity: 0.6;
      }
    }
  }

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid var(--grey_1);
    padding-right: 3rem;
  }
`;

function PostSmall({ img, text, date }) {
  return (
    <PostBigStyles>
      <div className='postBig__wrapper'>
        <div className='postBig__img'>
          <img src={img} alt={text} />
        </div>
        <div className='postBig__text'>
          <h1>{text}</h1>
          <p>{date}</p>
        </div>
      </div>
    </PostBigStyles>
  );
}

export default PostSmall;
