// import { Inter } from "next/font/google";
import "../styles/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Demonavbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

