import styled from "styled-components";
import { Link } from "react-router";

export default function Footer() {

  const StyledFooter = styled.footer
    `
      background-color: #AC92A6;
      padding: 15px;
    `;

  return (
    <StyledFooter>
      <p>
        2025 Ryan Hwang. All rights reserved. <Link to="credits.html">Credits</Link> &copy;
      </p>
    </StyledFooter>
  )
}