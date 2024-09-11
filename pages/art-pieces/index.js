import styled from "styled-components";
import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
