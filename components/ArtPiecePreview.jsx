import styled from "styled-components";
import Image from "next/image";

const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
`;

export default function ArtPiecePreview({ image, dimensions, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={400} height={500} />
      <Title>
        {title} <i>By</i> {artist}
      </Title>
    </div>
  );
}
