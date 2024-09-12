import ArtPiecePreview from "@/components/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPiecePage({ data }) {
  const router = useRouter();
  const pieceSlug = router.query.slug;

  const selectedImage = data.find((piece) => piece.slug === pieceSlug);

  return (
    <div>
      <ArtPiecePreview
        key={selectedImage.slug}
        slug={selectedImage.slug}
        title={selectedImage.name}
        artist={selectedImage.artist}
        image={selectedImage.imageSource}
        dimensions={selectedImage.dimensions}
      />
    </div>
  );
}
