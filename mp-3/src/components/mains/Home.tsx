import portrait from "./src/portrait.jpg";
import styled from "styled-components";

export default function Home() {
  const StyledMain = styled.main
    `
      height: 100%; 
      width: 70%;
      justify-content: center;
      padding:10px;

      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    `;

  const StyledDiv = styled.div
    `
      font-size: calc( 15px + 1vw);
      display: flex;
      flex-direction: row;
      text-align: left;
      align-items: center;
      padding: 50px;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    `;

  const StyledP = styled.p
    `
      font-size: calc( 15px + 1vw);
      display: flex;
      flex-direction: row;
      text-align: left;
      align-items: center;
      padding: 50px;
    `;

  const StyledImg = styled.img
    `
      display: block;
      margin: 2.5%;
      max-width: 35%;
      height: auto;
      @media screen and (max-width:1000px) {
        max-width: 55%;
        height: auto;
      }
    `;

  return (
    <StyledMain>
      <h1>Home</h1>
      <StyledDiv>
        <StyledImg src={portrait} alt="portrait" id="portrait" />
        <p>Hello! My name is Ryan Hwang and this is website contains
          my resume. I am currently an undergraduate student studying
          computer science at Boston University. I plan to graduate this
          fall and pursue a masters at a different university.</p>
      </StyledDiv>
      <StyledP>The website contains my education, experience, reference,
        certification, and project information. You can use the
        navigation bar to look at the different content!</StyledP>
    </StyledMain>
  )
}