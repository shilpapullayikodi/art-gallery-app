import ArtPiecePreview from "@/components/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPiecePage({ data }) {
  const router = useRouter();
  const pieceSlug = router.query.slug;

  const selectedImg = data.find((piece) => piece.slug === pieceSlug);

  return (
    <div>
      <ArtPiecePreview
        key={selectedImg.slug}
        slug={selectedImg.slug}
        title={selectedImg.name}
        artist={selectedImg.artist}
        image={selectedImg.imageSource}
        dimensions={selectedImg.dimensions}
      />
    </div>
  );
}
