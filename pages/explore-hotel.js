import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import ExploreHotel from "@/components/ExploreHotel";

export default function explore_hotel() {
  return (
    <main
    className={`block sm:flex min-h-screen w-screen font-poppins`}
    >
      <Sidebar />
      <ExploreHotel />
    </main>
  );
}
