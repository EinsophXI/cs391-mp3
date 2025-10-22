import { Link } from "react-router";
import styled from "styled-components";

export default function Nav() {

  const StyledNav = styled.nav
    `
      background-color: #DEE8D5;
      width: 20%;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    `
  const StyledList = styled.ul
    `
      padding-left: 0;
      list-style: none;
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        width: 100%;
        font-size: calc(2px + 2vw);
      }
    `

  const StyledItem = styled.li
    `
      border: 1px solid #AC92A6;
      background-color: #E9FAE3;
      padding: 5%;
      width: 80%;
      margin: 10%;

      @media screen and (max-width: 1000px) {
        padding: 2%;
        margin:1%;
      }
    `
  const StyledLink = styled(Link)
    `
      text-decoration: none;
    `

  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <StyledLink to={`/`}>Home</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to={`/education`}>Education</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to={`/experience`}>Experience</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to={`/references`}>References</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to={`/certifications`}>Certifications</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to={`/projects`}>Projects</StyledLink>
        </StyledItem>
      </StyledList>
    </StyledNav>
  )
}