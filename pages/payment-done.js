import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import PaymentDone from "@/components/PaymentDone";

export default function payment_done() {
  return (
    <main
    className={`block sm:flex min-h-screen w-screen font-poppins`}
    >
      <Sidebar />
      <PaymentDone />
    </main>
  );
}