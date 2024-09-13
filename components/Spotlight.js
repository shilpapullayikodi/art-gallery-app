import styled from "styled-components";
import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";

const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
  font-style: italic;
`;

export default function Spotlight({ piece, artPiecesInfo, toggleFavourite }) {
  return (
    <div>
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
    </div>
  );
}
