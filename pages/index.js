import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <main
      className={`block sm:flex min-h-screen w-screen font-poppins`}
    >
      <Sidebar />
      <Explore />
    </main>
  );
}
