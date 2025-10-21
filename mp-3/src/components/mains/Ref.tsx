import styled from "styled-components";

export default function Ref() {
  const StyledMain = styled.main
    `
      height: 100vh;
      width: 70%;
      justify-content: center;
      padding:10px;

      @media screen and (max-width: 1000px) {
        width: 100%;
      }

      h2 {
        padding: 15px;
        text-align: left;
        align-items: flex-start;
      }
    `

  const StyledDiv1 = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 15px;
  `

  const StyledDiv2 = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
    text-align: center;
  `;

  return (
    <StyledMain>
      <h1>References</h1>
      <h2 id="personal">Personal References:</h2>
      <StyledDiv1>
        <StyledDiv2>
          <h3>Name</h3>
        </StyledDiv2>
        <StyledDiv2>
          <h3>Relation</h3>
        </StyledDiv2>
        <StyledDiv2>
          <h3>Contact</h3>
        </StyledDiv2>
        <StyledDiv2>
          <p>Charlie Hwang</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Father</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>(000)-000-0000</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Tina Hwang</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Mother</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>(111)-111-1111</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Brandon Hwang</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Brother</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>(222)-222-2222</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Bryan Hwang</p>
        </StyledDiv2>
        <StyledDiv2>
          <p>Brother</p>
        </StyledDiv2>
        <StyledDiv2  >
          <p>(333)-333-3333</p>
        </StyledDiv2>
      </StyledDiv1>
    </StyledMain>
  )
}