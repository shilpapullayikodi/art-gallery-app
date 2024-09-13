import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  toggleFavourite,
}) {
  const spotlightImage = data[Math.floor(Math.random() * data.length)];

  return (
    <Spotlight
      piece={spotlightImage}
      artPiecesInfo={artPiecesInfo}
      toggleFavourite={toggleFavourite}
    />
  );
}
