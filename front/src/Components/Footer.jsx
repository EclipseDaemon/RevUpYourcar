"use client";

import { Footer } from "flowbite-react";

export function Footerr() {
  return (
    <Footer container className="bg-green-500 rounded-none">
      <Footer.Copyright
        href="#"
        by="Flowbite™"
        year={2022}
        className="text-white"
      />
      <Footer.LinkGroup className="text-white">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
