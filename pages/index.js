import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram by Om Prakash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal/>
    </div>
  );
}
