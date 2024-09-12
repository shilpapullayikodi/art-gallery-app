import NextLink from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #638c80;
  padding: 1rem 2rem;
  font-size: 25px;
`;

const Link = styled(NextLink)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e2808a;
    color: black;
  }

  &:active {
    background-color: #555;
    color: white;
  }
`;

export default function Navigation() {
  return (
    <Container>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </Container>
  );
}
