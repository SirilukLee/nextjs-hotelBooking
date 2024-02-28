import React, { useState, useEffect } from 'react';
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useRouter } from 'next/router'
import Select from 'react-select';
import Swal from 'sweetalert2';

const ReviewHotel = () => {
    const router = useRouter()

    const [search, setSearch] = useState({
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        location: "",
        roomQty: "2a1c1r",
    });

    const [guestData, setGuestData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobileno: "",
        request: ""
    })
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);


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

    const continueClick = async () => {
        console.log(guestData);
        router.push("/payments")

    }

    const handleChangeEmail = (e) => {
        const { value } = e.target;
        setGuestData({ ...guestData, email: value });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(value));
    };

    const handleChangeMobileNo = (e) => {
        const { value } = e.target;
        setGuestData({ ...guestData, mobileno: value });

        const phoneRegex = /^\d{10}$/;
        setIsValidPhoneNumber(phoneRegex.test(value));
    };

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

            <div className='px-12 py-8'>
                <div className='space-y-10 flex flex-wrap xl:flex-nowrap'>
                    <div className='w-full lg:w-7/12'>
                        <p>Review your booking</p>
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#2D3DDF]'>Holiday Inn Resort</p>
                                    <div className='flex'>
                                        <svg width="22" height="22" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5186 24.92L25.0971 31L22.5633 19.5311L31.0186 11.8195L19.8718 10.8124L15.5186 0L11.1645 10.8124L0.0185547 11.8195L8.47388 19.5311L5.93934 31L15.5186 24.92Z" fill="#DFA12D" />
                                        </svg>

                                        <svg width="22" height="22" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5186 24.92L25.0971 31L22.5633 19.5311L31.0186 11.8195L19.8718 10.8124L15.5186 0L11.1645 10.8124L0.0185547 11.8195L8.47388 19.5311L5.93934 31L15.5186 24.92Z" fill="#DFA12D" />
                                        </svg>

                                        <svg width="22" height="22" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5186 24.92L25.0971 31L22.5633 19.5311L31.0186 11.8195L19.8718 10.8124L15.5186 0L11.1645 10.8124L0.0185547 11.8195L8.47388 19.5311L5.93934 31L15.5186 24.92Z" fill="#DFA12D" />
                                        </svg>

                                        <svg width="22" height="22" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5186 24.92L25.0971 31L22.5633 19.5311L31.0186 11.8195L19.8718 10.8124L15.5186 0L11.1645 10.8124L0.0185547 11.8195L8.47388 19.5311L5.93934 31L15.5186 24.92Z" fill="#DFA12D" />
                                        </svg>
                                        <svg width="22" height="22" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.447937" d="M15.5 24.92L25.0786 31L22.5448 19.5311L31 11.8195L19.8533 10.8124L15.5 0L11.146 10.8124L0 11.8195L8.45533 19.5311L5.92079 31L15.5 24.92Z" fill="#B7BCF3" />
                                        </svg>

                                    </div>
                                </div>
                                <p className='text-gray-400'>Tambudki, Arpora, goa, Goa, India</p>
                                <p className='text-gray-400'>Holiday In Resort</p>
                            </div>
                            <div>
                                <img src='/img/review1.png' />
                            </div>

                        </div>

                        <div className='w-full bg-[#F4F7FF] rounded mt-4'>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex justify-around items-center px-6 py-4'>
                                    <div className=''>
                                        <p className='text-gray-500 text-sm'>Check-in</p>
                                        <p>Sunday 21,Dec</p>
                                        <p className='text-gray-500 text-sm'>10am</p>
                                    </div>
                                    <div>
                                        <p className='border px-6 p-2 bg-[#B7BCF3] text-[#2D3DDF] rounded'>1 night</p>
                                    </div>
                                </div>

                                <div className='flex justify-around items-center px-6 py-4'>
                                    <div className=''>
                                        <p className='text-gray-500 text-sm'>Check-out</p>
                                        <p>Monday 22,Dec</p>
                                        <p className='text-gray-500 text-sm'>10am</p>
                                    </div>
                                    <div>
                                        <p className='px-4 p-2'>2 Adult - 1 room</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pr-16 mt-10 space-y-4'>
                            <p>Guest Details</p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4'>
                                <input type='text' className='w-full border px-2 py-3 rounded'
                                    value={guestData.firstname} onChange={(e) => setGuestData({ ...guestData, firstname: e.target.value })}
                                    placeholder='First Name' />
                                <input type='text' className='w-full border px-2 py-3 rounded'
                                    value={guestData.lastname} onChange={(e) => setGuestData({ ...guestData, lastname: e.target.value })}
                                    placeholder='Last Name' />
                                <div>
                                    <input type='email' className='w-full border px-2 py-3 rounded'
                                        value={guestData.email} onChange={(e) => handleChangeEmail(e)}
                                        placeholder='E-mail address'
                                    />
                                    {!isValidEmail && <span className="text-xs text-red-500">Please enter a valid email address.</span>}

                                </div>
                                <div>
                                    <input type='tel' className='w-full border px-2 py-3 rounded'
                                        value={guestData.mobileno} onChange={(e) => handleChangeMobileNo(e)}
                                        placeholder='Mobile number'
                                        maxLength="10"
                                    />
                                    {!isValidPhoneNumber && <span className="text-xs text-red-500">Please enter a valid 10-digit phone number.</span>}

                                </div>


                            </div>
                            <div>
                                <button> Add Guest +</button>
                            </div>
                            <div className='space-y-1'>
                                <p>Special Request(optional)</p>
                                <textarea type='text' rows={4} className='w-full border rounded p-2'
                                    value={guestData.request} onChange={(e) => setGuestData({ ...guestData, request: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-5/12 px-0 sm:px-6 lg:px-12 xl:px-24 2xl:px-32'>
                        <div className='rounded shadow-lg px-8 py-4 '>
                            <div className='grid grid-cols-2 text-sm text-gray-500 text-justify gap-x-8 gap-y-4'>
                                <p>1 room X 1 night</p>
                                <p className='text-right'>1,000.00</p>
                                <p>Total discount</p>
                                <p className='text-right'>0.00</p>
                                <p>Total discount</p>
                                <p className='text-right'>1,000.00</p>
                                <p>Taxes & service fees</p>
                                <p className='text-right'>140.00</p>
                                <p className='font-bold text-black'>Total Amount</p>
                                <p className='text-right font-bold text-[#2D3DDF]'>1,140.00</p>
                            </div>

                            <p className='text-black text-sm mt-12 mb-6'>Cancellation Charges </p>
                            <div className='space-y-6 text-xs text-gray-400'>
                                <p className='text-black '>Non RefundablePenalty</p>
                                <p>may be charged by the airline & by MMT based on how close to departure date you cancel. View fare rules to know more.</p>
                                <button>VIEW POLICY</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-4 flex justify-center lg:justify-start'>
                    {guestData.firstname !== "" && guestData.lastname !== "" && guestData.email !== "" && guestData.mobileno !== "" && isValidEmail && isValidPhoneNumber ?
                        <button className='px-12 py-2 bg-[#2D3DDF] text-white text-lg rounded'
                            onClick={continueClick}
                        >
                            Continue
                        </button>
                        :
                        <button className='px-12 py-2 bg-[#b0b4dd] text-white text-lg rounded cursor-not-allowed'
                        >
                            Continue
                        </button>
                    }
                </div>

            </div>


        </div>
    )
}

export default ReviewHotel;