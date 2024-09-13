import styled from "styled-components";

const Button = styled.button`
  width: 36px;
  height: 40px;
  background-color: transparent;
  border: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const ButtonContainer = styled.button`
  position: absolute;
  top: -10px;
  right: 4px;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={() => onToggleFavorite(slug)}>
        {isFavorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="transparent"
            stroke="currentColor"
          >
            <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
          </svg>
        )}
      </Button>
    </ButtonContainer>
  );
}
