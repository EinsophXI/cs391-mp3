import etsy from "./src/etsy.png";
import tutor from "./src/tutoring.jpg";
import styled from "styled-components";

export default function Exp() {
  const StyledMain = styled.main
    `
      height: 100vh;
      width: 70%;
      justify-content: center;
      padding:10px;

      @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
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
    `

  const StyledItem = styled.li
    `
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
    `

  const StyledImg = styled.img
    `
      width: 500px; 
      height: auto;
      margin-left: auto;
      padding: 10px;
    `
  return (
    <StyledMain>
      <h1>Work Experience</h1>
      <StyledList>
        <StyledItem>
          <div className="text">
            <h1>Curious Tinkerings - Etsy</h1>
            <h2>Shop Owner</h2>
            <h3>October 2018 - September 2024</h3>
            <StyledList id="desc">
              <StyledItem>
                Maintained a storefront on the online marketplace Etsy, selling primarily keyboard-related products.
              </StyledItem>
              <StyledItem>
                Managed and sold over 6,500 products, handling all of the customer’s inquiries.
              </StyledItem>
            </StyledList>
          </div>
          <StyledImg src={etsy} alt="etsy" id="etsy" />
        </StyledItem>

        <StyledItem>
          <div className="text">
            <h1>Self-Employed</h1>
            <h2>Tutor</h2>
            <h3>May 2021 - May 2023</h3>
            <StyledList id="desc">
              <StyledItem>
                Taught and explained concepts in precalculus, calculus, and the Java programming language.
              </StyledItem>
              <StyledItem>
                Created lesson plans to help students further understand concepts and other material.
              </StyledItem>
            </StyledList>
          </div>
          <StyledImg src={tutor} alt="tutor" className="tutor" />
        </StyledItem>
      </StyledList>
    </StyledMain>
  )
}