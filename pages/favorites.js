import styled from "styled-components";
import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  data,
  artPiecesInfo,
  toggleFavourite,
}) {
  const pieces = data.filter((piece) =>
    artPiecesInfo.find(
      (artInfo) => artInfo.slug == piece.slug && artInfo.isFavourite
    )
  );

  return (
    <ArtPieces
      pieces={pieces}
      toggleFavourite={toggleFavourite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
