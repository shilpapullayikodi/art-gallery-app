import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isValidating } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading data</div>;
  if (isValidating) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
