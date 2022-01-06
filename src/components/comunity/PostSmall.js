import React from "react";
import styled from "styled-components";

const PostSmallStyles = styled.article`
  .postSmall__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    .postSmall__text {
      width: 70%;
      h1 {
        font-size: 1rem;
        font-weight: 600;
      }
      p {
        margin-top: 1rem;
        font-weight: 600;
        opacity: 0.5;
      }
    }
    .postSmall__img {
      width: 30%;
      img {
        object-fit: cover;
        border-radius: 1rem;
      }
    }
  }
`;

function PostSmall({ img, text, date }) {
  return (
    <PostSmallStyles>
      <div className='postSmall__wrapper'>
        <div className='postSmall__text'>
          <h1>{text}</h1>
          <p>{date}</p>
        </div>
        <div className='postSmall__img'>
          <img src={img} alt={text} />
        </div>
      </div>
    </PostSmallStyles>
  );
}

export default PostSmall;
