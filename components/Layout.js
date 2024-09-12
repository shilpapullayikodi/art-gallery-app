import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  color: white;
`;

const Background = styled.div`
  inset: 0;
  background-color: black;
  z-index: -1;
  filter: brightness(70%);
  transition: filter 1.2s;
`;

const Content = styled.main`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  top: 0;
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Background>
        <Title>ART GALLERY</Title>
        <Content>{children}</Content>
        <Navigation />
      </Background>
    </Container>
  );
}
