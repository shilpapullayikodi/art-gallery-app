import styled from "styled-components";
import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  toggleFavourite,
}) {
  return (
    <>
      <ArtPieces
        pieces={data}
        toggleFavourite={toggleFavourite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
