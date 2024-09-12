import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR, { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>; //Loading data for the first time

  console.log(data);

  return (
    <Layout>
      <GlobalStyle />
      <SWRConfig //configuring swr
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </Layout>
  );
}
