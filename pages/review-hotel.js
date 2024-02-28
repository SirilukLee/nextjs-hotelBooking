import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import ReviewHotel from "@/components/ReviewHotel";

export default function review_hotel() {
    return (
        <main
        className={`block sm:flex min-h-screen w-screen font-poppins`}
        >
            <Sidebar />
            <ReviewHotel />
        </main>
    );
}
