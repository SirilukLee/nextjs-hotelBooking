import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Sidebar() {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <div className={`hidden sm:block bg-[#2D3DDF] w-[9%] rounded-tr-3xl rounded-bl-3xl text-base`}>
                <div className="flex flex-col h-full">
                    <div className='flex justify-center items-center h-16 py-12'>
                        <img src="/img/Group_335.png" className='w-9 h-9' />
                    </div>
                    <ul className="hidden h-full flex-1 sm:flex flex-col justify-start xl:justify-center items-center gap-8 md:gap-20">
                        <Link href="/">
                            <li className='flex flex-col justify-center'>
                                <svg className='self-center' width="20" height="20" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.951172 7.65159L9.50008 1.00244L18.049 7.65159V18.1002C18.049 19.1495 17.1984 20 16.1492 20C16.1492 20 11.4904 20 9.53771 20C7.58504 20 8.33853 20 8.33853 20H2.85093C1.80172 20 0.951172 19.1495 0.951172 18.1002V7.65159Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.5 20V10H12.5V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Home</span>

                            </li>
                        </Link>
                        <Link href="/hotels" className='bg-white w-[4rem] h-[4rem] p-1 rounded-full'>
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7" stroke="#2D3DDF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="15.9393" y1="17" x2="13.5001" y2="14.5608" stroke="#2D3DDF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='font-bold'>Explore</span>
                            </li>
                        </Link>
                        <Link href="/">
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="20" height="20" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4298 2.41452C16.5446 0.528495 13.4873 0.528494 11.6021 2.41452L10.6719 3.34476L9.74167 2.41452C7.85627 0.529123 4.79944 0.529123 2.91405 2.41452C1.02865 4.29991 1.02865 7.35674 2.91405 9.24214L3.84429 10.1724L10.6719 17L17.4995 10.1724L18.4298 9.24214C20.3158 7.357 20.3158 4.29965 18.4298 2.41452Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className=''>Trip</span>
                            </li>
                        </Link>
                        <Link href="/">
                            <li className='flex flex-col justify-center items-center'>
                                <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 17V15C15 12.7909 13.433 11 11.5 11H4.5C2.567 11 1 12.7909 1 15V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <ellipse cx="7.99989" cy="5" rx="3.55556" ry="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className=''>Profile</span>
                            </li>
                        </Link>
                    </ul>


                </div>

            </div >

            <div className='w-full bg-[#2D3DDF] h-12 sm:hidden flex items-center justify-end px-2'>
                <button onClick={() => setShowNav(!showNav)}
                    className='border border-white rounded text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            {showNav ?
                <ul className="w-full flex flex-col gap-y-4 bg-[#2D3DDF] items-end px-4">
                    <Link href="/" className='w-full'>
                        <li className='flex gap-2 justify-start items-center'>
                            <svg className='self-center' width="20" height="20" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.951172 7.65159L9.50008 1.00244L18.049 7.65159V18.1002C18.049 19.1495 17.1984 20 16.1492 20C16.1492 20 11.4904 20 9.53771 20C7.58504 20 8.33853 20 8.33853 20H2.85093C1.80172 20 0.951172 19.1495 0.951172 18.1002V7.65159Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.5 20V10H12.5V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Home</span>

                        </li>
                    </Link>
                    <Link href="/hotels" className='w-full'>
                        <li className='flex gap-2 justify-start items-center'>
                        <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="15.9393" y1="17" x2="13.5001" y2="14.5608" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            <span className='font-bold'>Explore</span>
                        </li>
                    </Link>
                    <Link href="/" className='w-full'>
                        <li className='flex gap-2 justify-start items-center'>
                            <svg width="20" height="20" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.4298 2.41452C16.5446 0.528495 13.4873 0.528494 11.6021 2.41452L10.6719 3.34476L9.74167 2.41452C7.85627 0.529123 4.79944 0.529123 2.91405 2.41452C1.02865 4.29991 1.02865 7.35674 2.91405 9.24214L3.84429 10.1724L10.6719 17L17.4995 10.1724L18.4298 9.24214C20.3158 7.357 20.3158 4.29965 18.4298 2.41452Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className=''>Trip</span>
                        </li>
                    </Link>
                    <Link href="/" className='w-full'>
                        <li className='flex gap-2 justify-start items-center'>
                            <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17V15C15 12.7909 13.433 11 11.5 11H4.5C2.567 11 1 12.7909 1 15V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <ellipse cx="7.99989" cy="5" rx="3.55556" ry="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className=''>Profile</span>
                        </li>
                    </Link>
                </ul>

                : ""}

        </>
    );
}