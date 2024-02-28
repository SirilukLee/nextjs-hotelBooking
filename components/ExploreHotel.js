import React, { useState, useEffect } from 'react';
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useRouter } from 'next/router'
import Select from 'react-select';
import Swal from 'sweetalert2';

const ExploreHotel = () => {

    const router = useRouter()

    const [search, setSearch] = useState({
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        location: "",
        roomQty: "2a1c1r",
    });
    const searchClick = async () => {
        console.log(search);
        const isSearchMissing = Object.values(search).some(value =>
            value === undefined || value === null || value === ""
        );
        if (isSearchMissing) {
            Swal.fire({
                icon: "warning",
                title: "Please enter destination."
            })
        } else {
            router.push("/hotels")
        }

    }

    return (
        <div className='w-screen'>
            <div className='px-12 py-8 space-y-5 bg-[#F4F7FF]'>
                <input className='w-full px-4 py-2 drop-shadow-lg border border-[#BEC3FF] bg-[#F2F3FF] rounded'
                    type='text'
                    placeholder='Search city , Country, Place for Travel advisory'
                />

                <div className='flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-8'>
                    <div className='w-full lg:w-1/6'>
                        <input type='text' className='w-full px-4 py-3 drop-shadow-lg border border-gray-400 rounded'
                            value={search.location} onChange={(e) => setSearch({ ...search, location: e.target.value })}
                            placeholder='Where are you going?' />
                    </div>
                    <div className='w-full lg:w-2/6 flex flex-wrap sm:flex-nowrap'>
                        <div className='w-full sm:w-1/2 drop-shadow-lg border border-gray-400 rounded bg-white'>
                            <DatePicker className='w-full px-8 py-3 outline-none '
                                selected={search.startDate}
                                onChange={(date) => setSearch({ ...search, startDate: date })}
                                dateFormat="dd MMM,yyyy"
                                maxDate={search.endDate}
                            />
                        </div>
                        <div className='w-full sm:w-1/2 drop-shadow-lg border border-gray-400 rounded bg-white'>
                            <DatePicker className='w-full px-8 py-3  outline-none '
                                selected={search.endDate}
                                onChange={(date) => setSearch({ ...search, endDate: date })}
                                dateFormat="dd MMM,yyyy"
                                minDate={search.startDate}
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-2/6'>
                        <select type='text' className='w-full px-4 py-3 drop-shadow-lg border border-gray-400 rounded'
                            value={search.roomQty} onChange={(e) => setSearch({ ...search, roomQty: e.target.value })}
                        >
                            <option value="2a1r">2 adult - 1 room</option>
                            <option value="2a1c1r">2 adult ,1 children - 1 room</option>
                        </select>
                    </div>
                    <div className='w-full lg:w-1/6 rounded'>
                        <button onClick={searchClick}
                            className='w-full h-[50px] lg:h-full bg-[#2D3DDF] text-white text-lg rounded'>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className='px-12 py-8 space-y-5'>
                <div className='flex flex-wrap xl:flex-nowrap xl:gap-24 gap-9'>
                    <div className='w-full xl:w-2/3'>
                        <div className='flex gap-2'>
                            <div className='w-[60%]'>
                                <div className='h-full'>
                                    <img src='/img/hotel1.png' className='h-full' />
                                </div>
                            </div>

                            <div className='w-[40%] space-y-2'>
                                <div className=''>
                                    <img src='/img/hotel2.png' />
                                </div>
                                <div className='flex gap-2'>
                                    <div>
                                        <img src='/img/hotel3.png' />
                                    </div>
                                    <div className='bg-black/25 relative'>
                                        <img src='/img/hotel4.png' />
                                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-20 flex items-center justify-center'>
                                            <span className='text-white'>See all</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div>
                                <p className='text-xl'>Holiday Inn Resort</p>
                                <span className='text-gray-400 text-sm'>
                                    Mobor,Cavelossim,Goa
                                </span>
                            </div>
                            <div className=''>
                                <p className='border border-[#2D3DDF] text-[#2D3DDF] text-sm  rounded px-6 py-1'>
                                    Price Starting from 1,000 BAHT
                                </p>
                            </div>

                        </div>

                        <div className='flex  gap-28 mt-8 flex-wrap xl:flex-nowrap'>
                            <Link href="/review-hotel" className='w-full xl:w-1/2 h-full'>
                                <div className='rounded-sm shadow-lg flex relative'>
                                    <div className='w-[40%] h-[140px]'>
                                        <img src='/img/hotel1.png'
                                            className='object-fill h-full' />
                                    </div>
                                    <div className='pl-4 py-2 text-sm w-[50%]'>
                                        <p className='font-normal'>Deluxe Room</p>
                                        <div className='text-[#2D3DDF] font-bold text-lg mt-2'>
                                            <p className=''>1,500 BAHT/<span>night</span></p>
                                        </div>
                                    </div>
                                    <div className='bg-[#2D3DDF] rounded drop-shadow-xl w-[10%]'>
                                    </div>
                                    <p className='rotate-90 text-white absolute right-0 top-10 text-xs'>Book Now</p>
                                </div>
                            </Link>
                            <Link href="/review-hotel" className='w-full xl:w-1/2'>
                                <div className='rounded-sm shadow-lg flex relative'>
                                    <div className='w-[40%] h-[140px]'>
                                        <img src='/img/hotel1.png'
                                            className='object-fill h-full' />
                                    </div>
                                    <div className='pl-4 py-2 text-sm w-[50%]'>
                                        <p className='font-normal'>Standard Room</p>
                                        <div className='text-[#2D3DDF] font-bold text-lg mt-2'>
                                            <p className=''>1,000 BAHT/<span>night</span></p>
                                        </div>
                                    </div>
                                    <div className='bg-[#2D3DDF] rounded drop-shadow-xl w-[10%]'>
                                    </div>
                                    <p className='rotate-90 text-white absolute right-0 top-10 text-xs'>Book Now</p>
                                </div>
                            </Link>
                        </div>


                    </div>
                    <div className='w-full xl:w-1/3'>
                        <div className='border px-12 py-9 '>
                            <div className='flex gap-8'>
                                <div className='relative'>
                                    <svg width="76" height="59" viewBox="0 0 76 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 0H73.0391C81.3233 0 65 6.71573 65 15V44C65 52.2843 58.2843 59 50 59H15C6.71573 59 0 52.2843 0 44V15C0 6.71573 6.71573 0 15 0Z" fill="#2D3DDF" />
                                    </svg>
                                    <span className='text-white text-2xl font-bold absolute left-3 top-4'>8.4</span>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg'>Excellent</p>
                                    <p className='text-gray-400 text-xs'>6879<span> Reviews</span></p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-4 mr-12'>
                                <div className=' text-gray-600 font-norma'>
                                    <p>Housekeeping</p>
                                </div>
                                <div className='flex'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>


                                </div>

                            </div>

                            <div className='grid grid-cols-2 mt-4 mr-12'>
                                <div className=' text-gray-600 font-norma'>
                                    <p>Food</p>
                                </div>
                                <div className='flex'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>


                                </div>

                            </div>

                            <div className='grid grid-cols-2 mt-4 mr-12'>
                                <div className=' text-gray-600 font-norma'>
                                    <p>Service</p>
                                </div>
                                <div className='flex'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>


                                </div>

                            </div>

                            <div className='grid grid-cols-2 mt-4 mr-12'>
                                <div className=' text-gray-600 font-norma'>
                                    <p>Staff</p>
                                </div>
                                <div className='flex'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.999249" d="M9.59541 16.3312L15.5251 20.0951L13.9565 12.9952L19.1908 8.22123L12.2903 7.59779L9.59541 0.904297L6.9 7.59779L0 8.22123L5.23434 12.9952L3.66531 20.0951L9.59541 16.3312Z" fill="#DFA12D" />
                                    </svg>

                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.447937" d="M10.3591 16.3312L16.2888 20.0951L14.7202 12.9952L19.9545 8.22123L13.054 7.59779L10.3591 0.904297L7.66367 7.59779L0.763672 8.22123L5.99802 12.9952L4.42899 20.0951L10.3591 16.3312Z" fill="#B7BCF3" />
                                    </svg>

                                </div>

                            </div>

                            <div className='text-gray-600 mt-8'>
                                <p>Service</p>
                                <div className='flex'>
                                    <div className='flex items-center gap-4'>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <svg width="24" height="24" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.4506 4.09914C16.3703 4.00109 16.2503 3.94386 16.1245 3.94386H14.525C14.1303 2.90275 13.616 1.8827 13.0315 1.49765C11.0095 0.16745 5.64619 0.16745 3.62417 1.49765C3.03924 1.88312 2.5271 2.90444 2.13027 3.94385H0.530752C0.403665 3.94385 0.284153 4.00109 0.204619 4.09914C0.124664 4.19677 0.0926821 4.32596 0.118773 4.4501L0.355692 5.59808C0.396091 5.79376 0.568625 5.93347 0.767671 5.93347H1.24151C0.784083 6.46118 0.562313 7.12565 0.559367 7.79054C0.556422 8.61197 0.868246 9.35429 1.43845 9.87947C1.44476 9.88494 1.45108 9.88873 1.45697 9.8942V11.5005C1.45697 11.8485 1.73976 12.1317 2.08819 12.1317H3.56357C3.91201 12.1317 4.1948 11.8485 4.1948 11.5005V10.8549H12.4601V11.5005C12.4601 11.8485 12.7428 12.1317 13.0913 12.1317H14.5667C14.9142 12.1317 15.1979 11.8485 15.1979 11.5005V9.92576C15.803 9.37154 16.0921 8.60902 16.0959 7.84777C16.0984 7.16015 15.8666 6.47128 15.3822 5.93263H15.8876C16.0875 5.93263 16.26 5.79292 16.2996 5.59682L16.5369 4.44925C16.5613 4.32596 16.5306 4.19761 16.4506 4.09914ZM4.31726 2.5518C5.92898 1.49092 10.7259 1.49092 12.3368 2.5518C12.6498 2.75715 13.0526 3.58742 13.4216 4.60412H3.23323C3.60145 3.58784 4.00417 2.75799 4.31726 2.5518ZM2.42947 7.94876C2.42947 7.26283 2.98579 6.70736 3.6713 6.70736C4.35765 6.70736 4.91313 7.26283 4.91313 7.94876C4.91313 8.63469 4.35765 9.19059 3.6713 9.19059C2.98579 9.19059 2.42947 8.63469 2.42947 7.94876ZM13 9.19059C12.3144 9.19059 11.7581 8.63469 11.7581 7.94876C11.7581 7.26283 12.3144 6.70735 13 6.70735C13.6863 6.70735 14.2418 7.26283 14.2418 7.94876C14.2418 8.63469 13.6855 9.19059 13 9.19059Z" fill="#003AA8" />
                                            </svg>
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <svg width="24" height="24" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9345 8.49649H3.32938V4.02293C3.32366 3.43552 3.64422 2.89341 4.1617 2.61537C4.44245 2.46322 4.76239 2.39877 5.08015 2.43034C4.75035 3.42915 5.00945 4.52855 5.75057 5.27497L6.59937 6.12373C6.91183 6.43634 7.41858 6.43634 7.73104 6.12373L10.5603 3.29453C10.8729 2.98207 10.8729 2.47531 10.5603 2.16286L9.71147 1.3141C8.73547 0.342484 7.19734 0.226172 6.08632 1.03997C5.10193 0.655515 3.99112 0.78267 3.11907 1.37963C2.24702 1.9766 1.72656 2.96613 1.72878 4.02294L1.72878 8.49649H0.928476C0.486481 8.49649 0.128174 8.8548 0.128174 9.29679C0.128174 9.73879 0.486481 10.0971 0.928476 10.0971H1.72878V12.498C1.7319 13.5121 2.37288 14.4145 3.32938 14.7514L3.32938 15.6992C3.32938 16.1412 3.68769 16.4995 4.12968 16.4995C4.57168 16.4995 4.92998 16.1412 4.92998 15.6992V14.8989H12.933V15.6992C12.933 16.1412 13.2913 16.4995 13.7333 16.4995C14.1753 16.4995 14.5336 16.1412 14.5336 15.6992V14.7514C15.4901 14.4145 16.1311 13.5121 16.1342 12.498L16.1342 10.0971H16.9345C17.3765 10.0971 17.7348 9.73879 17.7348 9.29679C17.7348 8.8548 17.3765 8.49649 16.9345 8.49649ZM6.88228 2.44577C7.3514 1.97789 8.11068 1.97789 8.5798 2.44577L8.86272 2.72869L7.16523 4.42621L6.88231 4.14329C6.41415 3.67429 6.41414 2.91479 6.88228 2.44577ZM14.5336 12.498C14.5333 12.9399 14.1752 13.298 13.7333 13.2983L4.12968 13.2983C3.68781 13.298 3.32968 12.9399 3.32938 12.498V10.0971H14.5336V12.498Z" fill="#003AA8" />
                                            </svg>
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <svg width="24" height="24" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99134 8.6497C5.99134 7.98386 5.82702 7.33983 5.51162 6.78691L5.43686 6.65608H0.756531L0.683328 6.78691C0.36871 7.33905 0.203613 7.98386 0.203613 8.6497C0.203613 10.3482 1.28453 11.7554 2.68707 11.9882V15.9544C1.87794 15.9872 1.27518 16.1102 1.27518 16.2558C1.27518 16.4287 2.09677 16.5673 3.11072 16.5673C4.12544 16.5673 4.94858 16.4287 4.94858 16.2558C4.94858 16.1102 4.34582 15.9872 3.5367 15.9544V11.9851C4.92522 11.7375 5.99134 10.3357 5.99134 8.6497ZM3.0967 11.5046C1.78683 11.5046 0.719929 10.2243 0.719929 8.64814C0.719929 8.12326 0.837522 7.61629 1.06258 7.17162H5.13159C5.35587 7.61629 5.47502 8.12404 5.47502 8.64814C5.4758 10.2251 4.40735 11.5046 3.0967 11.5046ZM10.9466 2.28491H8.88832V0.5H10.9466V2.28491ZM10.9466 4.49658V2.83394H8.88832V4.49736C8.01923 4.88908 7.41179 5.76284 7.41179 6.7799V8.40984V13.6065V16.66H12.4223V13.6065V8.40984V6.7799C12.4231 5.76284 11.8172 4.88908 10.9466 4.49658ZM11.98 14.1407H7.89852V9.24389H11.98V14.1407ZM5.25931 8.70343C5.25931 8.70343 5.15106 11.2928 3.13174 11.2928C1.11242 11.2928 0.839858 8.70343 0.839858 8.70343H5.25931Z" fill="#003AA8" />
                                            </svg>
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                                            </svg>
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <img src='/img/Clocks.png' width={24} height={24} />
                                        </div>
                                        <div className='flex items-center justify-center bg-white w-12 h-12 border rounded drop-shadow-xl'>
                                            <span className='text-[#2D3DDF] text-lg'>...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-12 py-8 text-[#2D3DDF]'>
                            <p>This property is in highly demand today.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ExploreHotel;