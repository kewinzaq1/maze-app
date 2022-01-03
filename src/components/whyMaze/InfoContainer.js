import React from "react";
import styled from "styled-components";
import video1 from "../../assets/why-maze/info/whyMaze-01.mp4";
import video2 from "../../assets/why-maze/info/whyMaze-02.mp4";
import video3 from "../../assets/why-maze/info/whyMaze-03.mp4";
import video4 from "../../assets/why-maze/info/whyMaze-04.mp4";
import InfoSection from "./InfoSection";

const InfoContainerStyles = styled.section`
  .InfoSection--blue {
    background-color: #f5fcff;
    padding-top: 30rem;
    margin-top: -30rem;
    p {
      color: #3881a0;
    }
  }
  .InfoSection--green {
    background-color: #f2f8f8;
    p {
      color: #346271;
    }
    .info__button {
      background-color: #346271;
      align-self: flex-start;
    }
  }
  .InfoSection--violet {
    background-color: #f2f3fb;

    p {
      color: #67409c;
    }
    .info__button {
      background-color: #67409c;
      align-self: flex-start;
    }
  }
  .InfoSection--orange {
    background-color: #fff9f5;

    p {
      color: #f58f53;
    }
    .info__button {
      background-color: #f58f53;
      align-self: flex-start;
    }
  }

  .infoBox:nth-child(odd) {
    .info__wrapper {
      flex-direction: column-reverse !important;
    }
  }

  @media (min-width: 768px) {
    .infoBox:nth-child(odd) {
      .info__wrapper {
        flex-direction: row-reverse !important;
      }
    }
  }
`;

function InfoContainer() {
  return (
    <InfoContainerStyles>
      <InfoSection
        className='infoBox InfoSection--blue'
        video={video1}
        title1='70% of teams do zero research'
        paragraph1='Too many under-resourced teams are relying on moderated 1-on-1 research projects that span over 120 hours and often run over budget. Despite 8 in 10 acknowledging research is critical, it’s often easier to do nothing at all.'
        addInfo={true}
        title2='Meet rapid testing, made for user-facing experiences'
        paragraph2='We believe anyone should be able to test anytime, anywhere to unite them with meaningful data they can act on. Maze empowers teams to test, learn, and act fast.'
      />
      <InfoSection
        className='infoBox InfoSection--green'
        video={video2}
        title1='Eliminate hours spent rewatching and rewinding'
        paragraph1='Moderated, recorded user research sessions only create more work. Get the answers you need in a fraction of the time with Maze, where results transform into quantitative data, like misclicks and heatmaps, and into a beautifully-packaged Maze Report.'
        buttonCheck={true}
      />
      <InfoSection
        className='infoBox InfoSection--violet'
        video={video3}
        title1='Reach your users where they are'
        paragraph1='Test with users around the world in just a few clicks. You can create a maze for every project need, from surveys to usability tests, share in seconds with a simple URL and have meaningful results in a matter of hours.'
        buttonCheck={true}
      />
      <InfoSection
        className='infoBox InfoSection--orange'
        video={video4}
        title1='Open up user insights to the whole team'
        paragraph1='Empower everyone in your organization to source and access invaluable user insights that optimize experiences and drive design-led companies. With Maze, it’s easy to collaborate, share, and iterate on projects together.'
        buttonCheck={true}
      />
    </InfoContainerStyles>
  );
}

export default InfoContainer;
