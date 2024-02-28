import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Hotels from "@/components/Hotels";

export default function hotels() {
    return (
        <main
        className={`block sm:flex min-h-screen w-screen font-poppins`}
        >
            <Sidebar />
            <Hotels />
        </main>
    );
}
