import styled from "styled-components";
import ArtPieces from "../components/ArtPieces";

const Title = styled.h1`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: #aaaaaa80;
  z-index: 999;
`;

export default function HomePage({ data }) {
  return (
    <>
      <Title>ART GALLERY</Title>
      <ArtPieces pieces={data} />
    </>
  );
}
