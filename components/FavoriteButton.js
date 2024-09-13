import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  border: 2px;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite}>
      {isFavorite ? (
        <image src="./assets/heart.svg" width={30} height={30} />
      ) : (
        <image src="" width={30} height={30} />
      )}
    </Button>
  );
}
