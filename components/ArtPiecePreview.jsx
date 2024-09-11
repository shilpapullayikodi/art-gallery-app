import styled from "styled-components";
import Image from "next/image";

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  color: #ccc;
`;

export default function ArtPiecePreview({ image, dimensions, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <Title>
        {title} By {artist}
      </Title>
    </div>
  );
}
