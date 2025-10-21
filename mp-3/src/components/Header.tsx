import styled from "styled-components";

export default function Header() {

  const StyledHeader = styled.header
    `
      background-color: #D5C7BC;
    `;

  const StyledH1 = styled.h1
    `
      background-color: #D5C7BC;
      padding: 15px;
    `;

  const StyledP = styled.p
    `
      background-color: #D5C7BC;
      height: 25px;
    `;

  return (
    <StyledHeader>
      <div>
        <StyledH1> Ryan Hwang's Resume</StyledH1>
        <StyledP>Website containing my resume</StyledP>
      </div>
    </StyledHeader>
  )
}