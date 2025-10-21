import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import { Route, Routes } from "react-router";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Ref from "./mains/Ref.tsx";
import Proj from "./mains/Proj.tsx";
import Exp from "./mains/Exp.tsx";
import Cert from "./mains/Cert.tsx";
import styled from "styled-components";

export default function Root() {

  const Wrapper = styled.div
    `
      width: 100%;
      background-color: #E9FAE3;
      margin: 0 auto;

      text-align: center;
      justify-content: center;
    `;

  const Container = styled.div
    `
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      justify-content: center;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    `

  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <Nav />
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/education`} element={<Edu />} />
            <Route path={`/references`} element={<Ref />} />
            <Route path={`/projects`} element={<Proj />} />
            <Route path={`/experience`} element={<Exp />} />
            <Route path={`/certifications`} element={<Cert />} />
          </Routes>
        </Container>
        <Footer />
      </Wrapper>
    </>
  )
}