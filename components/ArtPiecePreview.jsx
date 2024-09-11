import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
}) {
  return (
    <div>
      <Image src={image} alt={title} width={400} height={500} />
      <Title>
        <Link href={`/art-pieces/${slug}`}>
          {title} <i>By</i> {artist}
        </Link>
      </Title>
    </div>
  );
}
