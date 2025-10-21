import bu from "./src/bu.png";
import ivc from "./src/ivc.png";
import shs from "./src/shs.png";
import styled from "styled-components";

export default function Edu() {
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

  const StyledList = styled.ul
    `
      padding-left: 0;
      list-style: none;
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
    `;

  const StyledItem = styled.li
    `
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: flex-start;
      }
   `;

  const StyledImg = styled.img
    `
      width: 500px; 
      height: auto;
      margin-left: auto;
      padding: 10px;

      @media screen and (max-width: 1000px) {
        margin: 0;
        width: 100%;
        max-width: 500px;
      }
    `

  return (
    <StyledMain>
      <h1>Educational Background</h1>
      <StyledList>
        <StyledItem>
          <div id="text">
            <h1>Boston University</h1>
            <h2>Computer Science</h2>
            <h3>September 2022 - December 2025</h3>
            <p>Currently pursing a B.A. in computer science.</p>
          </div>
          <StyledImg src={bu} alt="bu" id="bu" />
        </StyledItem>
        <StyledItem>
          <div id="text">
            <h1>Irvine Valley College</h1>
            <h3>June 2025 - August 2025</h3>
            <p>Took summer courses in business and astronomy.</p>
          </div>
          <StyledImg src={ivc} alt="ivc" id="ivc" />
        </StyledItem>
        <StyledItem>
          <div id="text">
            <h1>Sage Hill School</h1>
            <h3>August 2018 - May 2022</h3>
          </div>
          <StyledImg src={shs} alt="shs" id="shs" />
        </StyledItem>
      </StyledList>
    </StyledMain>
  )
}