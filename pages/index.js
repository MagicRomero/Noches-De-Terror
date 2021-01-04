import Head from "next/head";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: auto;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noches de Terror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header><h1>Soy el header no pasa na</h1></Header>
    </div>
  );
}
