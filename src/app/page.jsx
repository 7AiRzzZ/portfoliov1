"use client";

import FooterDesktop from "./components/layouts/footer/Desktop";
import FooterMobile from "./components/layouts/footer/Mobile";
import NavbarDesktop from "./components/layouts/navbar/Desktop";
import NavbarMobile from "./components/layouts/navbar/Mobile";

export default function Home() {
  return (
    <>
      <NavbarMobile/>
      <NavbarDesktop />

      <FooterMobile />
      <FooterDesktop />
    </>
  );
}
