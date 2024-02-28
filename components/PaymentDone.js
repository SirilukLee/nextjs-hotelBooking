import React, { useState, useEffect } from 'react';
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const PaymentDone = () => {

    return (

        <div className='w-full flex flex-col items-center justify-center gap-y-8'>

            <img src='/img/Astronaut.png' className=' w-64 lg:w-96' />
            <p className='text-[#2D3DDF] text-lg sm:text-2xl lg:text-4xl font-bold'>Booking Successfully completed</p>
            <p className='text-xs sm:text-sm lg:text-lg'>Your trip schedule is ready,please check under profile.</p>
            <a href='/'
                className='bg-[#2D3DDF] px-24 py-4 rounded text-white'>Home</a>
        </div>
    )
}

export default PaymentDone;