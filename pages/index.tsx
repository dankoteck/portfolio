import { ReactElement } from "react";

import { Container, SxProps } from "@mui/material";
import Head from "next/head";

import Banner from "layouts/Banner";

const sx = {
  main: {
    background: "rgb(17, 17, 17)",
    overflow: "hidden",
    height: "auto",
  } satisfies SxProps,
};

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Perfect portfolio of Dang Khoa</title>
        <meta name="description" content="Perfect portfolio of Dang Khoa" />
      </Head>

      <main style={sx.main}>
        <Container maxWidth="xl">
          <Banner />
          {/* <Banner /> */}
        </Container>
      </main>
    </>
  );
}
