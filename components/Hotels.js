import React, { useState, useEffect } from 'react';
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Hotels = () => {

    const viewDetailsBtn = () => {
        return (
            <div className='mr-4'>
                <button className='border px-6 py-2 rounded shadow text-[#2D3DDF]'>View Details</button>
            </div>
        )
    }


    return (
        <div className='w-screen flex flex-wrap lg:flex-nowrap'>
            <div className='w-full lg:w-5/6'>
                <div className='px-12 py-8 space-y-5'>
                    <input className='w-full px-4 py-2 drop-shadow-lg border border-[#BEC3FF] bg-[#F2F3FF] rounded'
                        type='text'
                        placeholder='Search city , Country, Place for Travel advisory'
                    />

                    <div className='flex justify-between'>
                        <p>Best places to enjoy your stay</p>
                        <div className='space-x-4'>
                            <button className='border border-[#2D3DDF] text-[#2D3DDF] px-4 py-2 rounded'>
                                Sort By
                            </button>
                            <button className='border border-[#2D3DDF] text-[#2D3DDF] px-4 py-2 rounded'>
                                Filter
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-6 text-sm'>
                            <Link href="/explore-hotel">
                                <img src='/img/h1.png' className='object-fill w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Nobu Hotel Chicago</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>

                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h2.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>The Langham, Chicago</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h3.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Trump International Hotel</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>

                            <Link href="/explore-hotel">
                                <img src='/img/h4.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>The Guesthouse Hotel</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h5.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Villa D’Citta</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h6.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Loews Chicago Hotel</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>

                            <Link href="/explore-hotel">
                                <img src='/img/h1.png' className='object-fill w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Nobu Hotel Chicago</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>

                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h2.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>The Langham, Chicago</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>
                            <Link href="/explore-hotel">
                                <img src='/img/h3.png' className='w-full' />
                                <div className='flex justify-between'>
                                    <div>
                                        <p>Trump International Hotel</p>
                                        <span className='text-xs font-normal text-gray-700'>Price starts from 1,000</span>
                                    </div>
                                    {viewDetailsBtn()}
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full lg:w-1/6 mt-4 lg:mt-24 border shadow-xl rounded px-2 py-4'>
                <p className='text-sm text-[#221F3C]'>Recommended</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                    <div className='mt-1 mb-4'>
                        <img src='/img/rec1.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Trip to Thailand &</p>
                                <p className='text-xs font-normal text-gray-700'>Get 30% off on flight booking</p>
                            </div>

                        </div>

                    </div>

                    <div className='mt-1 mb-4'>
                        <img src='/img/rec2.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Get additional 25% off </p>
                                <p className='text-xs font-normal text-gray-700'>onBhutan tour fare</p>
                            </div>

                        </div>

                    </div>

                    <div className='mt-1 mb-4'>
                        <img src='/img/rec3.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Trip to Thailand &</p>
                                <p className='text-xs font-normal text-gray-700'>Get 30% off on flight booking</p>
                            </div>
                        </div>

                    </div>
                    <div className='mt-1 mb-4'>
                        <img src='/img/rec4.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Flat 40% off on hotel bookings </p>
                                <p className='text-xs font-normal text-gray-700'>in Agra </p>
                            </div>

                        </div>

                    </div>
                    <div className='mt-1 mb-4'>
                        <img src='/img/rec1.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Trip to Thailand &</p>
                                <p className='text-xs font-normal text-gray-700'>Get 30% off on flight booking</p>
                            </div>

                        </div>

                    </div>

                    <div className='mt-1 mb-4'>
                        <img src='/img/rec2.png' className='object-fill w-full' />
                        <div className='flex justify-between mt-1'>
                            <div className=''>
                                <p className='text-xs font-normal text-gray-700'>Get additional 25% off </p>
                                <p className='text-xs font-normal text-gray-700'>onBhutan tour fare</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hotels;