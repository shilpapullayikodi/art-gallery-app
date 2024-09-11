import styled from "styled-components";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const Title = styled.h1`
  position: sticky;
  top: 0;
  text-align: center;
  background-color: #aaaaaa80;
  z-index: 999;
`;

export default function HomePage({ data }) {
  const spotlightImg = data[Math.floor(Math.random() * data.length)];

  return (
    <>
      <Title>ART GALLERY</Title>

      <Spotlight
        image={spotlightImg.imageSource}
        title={spotlightImg.title}
        artist={spotlightImg.artist}
      />

      <ArtPieces pieces={data} />
    </>
  );
}
