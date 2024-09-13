import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

const Container = styled.div`
  position: relative;
`;

const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
`;

export default function ArtPiecePreview({
  image,
  dimensions,
  title,
  artist,
  slug,
  artPiecesInfo,
  toggleFavourite,
}) {
  const artPieceInfo = artPiecesInfo.find((info) => info.slug === slug);
  const isFavorite = artPieceInfo ? artPieceInfo.isFavourite : false;

  return (
    <Container>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavourite}
        slug={slug}
      />
      {
        <Image
          src={image}
          alt={title}
          width={400}
          height={500}
        /> /* image optimization */
      }
      <Title>
        <Link href={`/art-pieces/${slug}`}>
          {title} <i>By</i> {artist}
        </Link>
      </Title>
    </Container>
  );
}
