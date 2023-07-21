"use client";

import Footer from "./components/layouts/footer/footer";
import Particles from "react-particles";
import NavBar from "./components/layouts/navbar/navbar";
import Header1 from "./components/layouts/home/Homepage";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header1 />
      <Footer />
    </>
  );
}
