import styled from "styled-components";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, toggleFavourite }) {
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          image={piece.imageSource}
          dimensions={piece.dimensions}
          title={piece.name}
          artist={piece.artist}
          artPiecesInfo={artPiecesInfo}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </>
  );
}
