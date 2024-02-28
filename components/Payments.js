import React, { useState, useEffect } from 'react';
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Payments = () => {
    
    
    return (

        <div className='w-screen flex flex-wrap lg:flex-nowrap px-6 lg:px-24 py:12 lg:py-24'>
            <div className='w-full lg:w-1/2'>
                <p className='text-lg py-8'>Payment Details</p>
                <div className='pl-6 pr-24 space-y-4'>
                    <Link  href="/payment-done" className='relative w-full flex items-center gap-8 px-4 py-2 hover:border hover:border-[#2D3DDF] hover:rounded hover:shadow group'>
                        <img src='/img/pay1.png' />
                        <span>Debit Card</span>
                        <svg className='absolute right-4 top-6 hidden group-hover:block' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7002 3.35547L11.8115 12.7153L2.7002 21.6445" stroke="#2D3DDF" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Link  href="/payment-done" className='relative w-full flex items-center gap-8 px-4 py-2 hover:border hover:border-[#2D3DDF] hover:rounded hover:shadow group'>
                        <img src='/img/pay2.png' />
                        <span>UPI</span>
                        <svg className='absolute right-4 top-6 hidden group-hover:block' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7002 3.35547L11.8115 12.7153L2.7002 21.6445" stroke="#2D3DDF" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Link  href="/payment-done" className='relative w-full flex items-center gap-8 px-4 py-2 hover:border hover:border-[#2D3DDF] hover:rounded hover:shadow group'>
                        <img src='/img/pay3.png' />
                        <span>PhonePay</span>
                        <svg className='absolute right-4 top-6 hidden group-hover:block' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7002 3.35547L11.8115 12.7153L2.7002 21.6445" stroke="#2D3DDF" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Link  href="/payment-done" className='relative w-full flex items-center gap-8 px-4 py-2 hover:border hover:border-[#2D3DDF] hover:rounded hover:shadow group'>
                        <img src='/img/pay4.png' />
                        <span>Net Banking</span>
                        <svg className='absolute right-4 top-6 hidden group-hover:block' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7002 3.35547L11.8115 12.7153L2.7002 21.6445" stroke="#2D3DDF" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </Link>
                    <Link  href="/payment-done" className='relative w-full flex items-center gap-8 px-4 py-2 hover:border hover:border-[#2D3DDF] hover:rounded hover:shadow group'>
                        <img src='/img/pay5.png' />
                        <span>Credit Card</span>
                        <svg className='absolute right-4 top-6 hidden group-hover:block' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.7002 3.35547L11.8115 12.7153L2.7002 21.6445" stroke="#2D3DDF" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='py-24 px-12'>
                <div className='border grid grid-cols-2 px-4 py-12 text-gray-500 text-sm gap-y-4 gap-x-12'>
                    <p>Base fare</p>
                    <p className='text-right text-[#B7BCF3]'>1,000.00</p>
                    <p>Total discount</p>
                    <p className='text-right text-[#B7BCF3]'>0.00</p>
                    <p>Price after discount</p>
                    <p className='text-right text-[#B7BCF3]'>1,000.00</p>
                    <p>Taxes & service fees</p>
                    <p className='text-right text-[#B7BCF3]'>140.00</p>
                    <p className='font-bold text-[#2D3DDF]'>Total Amount</p>
                    <p className='font-bold text-[#2D3DDF]'>1,140.00</p>
                </div>
            </div>

        </div>
    )
}

export default Payments;