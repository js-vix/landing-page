import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
