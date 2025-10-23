import React from "react";
import { PricingCreative } from "./pricing"; // Adjust the path as needed
import { Header } from "@/app/components/header";

export default function HomePage() {
  return (
    <main>
      <Header/>
      <PricingCreative />
    </main>
  );
}
