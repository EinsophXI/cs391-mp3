import ph1 from "./src/ph1.png";
import styled from "styled-components";

export default function Cert() {
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
    `
  const StyledImg = styled.img
    `
      width: 500px; 
      height: auto;
      margin-left: auto;
      padding: 10px;
      @media screen and (max-width: 1000px) {
        margin:0;
        width: 100%;
        max-width: 500px;
      }
    `

  return (
    <StyledMain>
      <h1>Certifications</h1>
      <StyledList>
        <StyledItem>
          <div id="text">
            <h1>Certification Name</h1>
            <h2>Where I got the cerification</h2>
            <h3>Start date - End date</h3>
          </div>
          <StyledImg src={ph1} alt="ph1" id="ph1" />
        </StyledItem>
        <StyledItem>
          <div id="text">
            <h1>Certification Name</h1>
            <h2>Where I got the cerification</h2>
            <h3>Start date - End date</h3>
          </div>
          <StyledImg src={ph1} alt="ph1" id="ph1" />
        </StyledItem>
        <StyledItem>
          <div id="text">
            <h1>Certification Name</h1>
            <h2>Where I got the cerification</h2>
            <h3>Start date - End date</h3>
          </div>
          <StyledImg src={ph1} alt="ph1" id="ph1" />
        </StyledItem>
      </StyledList>
    </StyledMain>
  )
}