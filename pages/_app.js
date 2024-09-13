import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR, { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

  const toggleFavourite = (slug) => {
    const storedArtPiece = artPiecesInfo.find((piece) => piece.slug === slug);

    if (storedArtPiece) {
      const updatedArtPiecesInfo = artPiecesInfo.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavourite: !piece.isFavourite }
          : piece
      );
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      const newArtPieceInfo = { slug: slug, isFavourite: true };
      setArtPiecesInfo((prevArctPieceInfos) => [
        ...prevArctPieceInfos,
        newArtPieceInfo,
      ]);
    }
  };

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>; //Loading data for the first time

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig //configuring swr
        value={{
          fetcher,
        }}
      >
        <Component
          {...pageProps}
          data={data}
          artPiecesInfo={artPiecesInfo}
          toggleFavourite={toggleFavourite}
        />
      </SWRConfig>
    </Layout>
  );
}
