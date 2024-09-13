import ArtPiecePreview from "@/components/ArtPiecePreview";
import NextLink from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Link = styled(NextLink)`
  color: black;
  text-decoration: none;
  padding-botton: 20px;
  font-size: 2em;
`;

export default function ArtPiecePage({ data, artPiecesInfo, toggleFavourite }) {
  const router = useRouter();
  const pieceSlug = router.query.slug;

  const selectedImage = data.find((piece) => piece.slug === pieceSlug);

  return (
    <div>
      <Link href="/art-pieces">{"←"}</Link>
      <ArtPiecePreview
        key={selectedImage.slug}
        slug={selectedImage.slug}
        title={selectedImage.name}
        artist={selectedImage.artist}
        image={selectedImage.imageSource}
        dimensions={selectedImage.dimensions}
        artPiecesInfo={artPiecesInfo}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}
