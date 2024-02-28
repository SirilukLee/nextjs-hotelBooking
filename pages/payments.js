import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Payments from "@/components/Payments";

export default function payments() {
  return (
    <main
    className={`block sm:flex min-h-screen w-screen font-poppins`}
    >
      <Sidebar />
      <Payments />
    </main>
  );
}
