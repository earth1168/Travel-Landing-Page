import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import MainPage from "./MainPage";
import Services from "./Services";
import Destination from "./Destination";
import Notify from "../components/Notify";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainPage />
      <Services />
      <Destination />
      <Notify />
    </div>
  );
};

export default Home;
