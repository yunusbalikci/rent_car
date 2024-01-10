import { FaCity } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Footer(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return(
        <div className="container font-open">
            <div className=" mt-10">
                <div className="w-full h-36">
                    <ul className="pb-10">
                        <h1 className="text-3xl ml-10 font-bold">Book a car</h1>
                        <div className="flex flex-nowrap space-x-2 md:space-x-20">
                            <li className="flex ml-3 md:ml-16 flex-col">
                                <label className="mt-5 font-bold">Pick up *
                                <IoLocationOutline className="absolute  text-red-500 mt-3 ml-2"></IoLocationOutline>
                                </label>
                                <input className="border-2 w-28 text-sm md:text-lg md:w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Drop off *
                                <IoLocationOutline className="absolute text-xl text-red-500 mt-3 ml-2"></IoLocationOutline>
                                </label>
                                <input className="border-2 w-28 text-sm md:text-lg md:w-64  h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Select model
                                <FaCar className="absolute text-xl text-red-500 mt-3 ml-2"></FaCar>
                                </label>
                                <input className="border-2 w-28 text-sm md:text-lg md:w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type model" type="text" />
                            </li>
                        </div>
                        <div className="flex flex-nowrap space-x-2 md:space-x-20">
                            <li className="flex ml-3 md:ml-16 flex-col">
                                <label className="mt-5 font-bold">Pick up *
                                </label>
                                <DatePicker dateFormat="yyyy/MM/dd" placeholderText="Select Date" className="border-2 w-28 text-sm md:text-lg md:w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />
                                <FaRegCalendarAlt className="absolute text-xl text-red-500 mt-14 ml-2"></FaRegCalendarAlt>

                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Drop off *
                                </label>
                                <DatePicker dateFormat="yyyy/MM/dd" placeholderText="Select Date" className="border-2 w-28 text-sm md:text-lg md:w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" selected={endDate} onChange={(date) => setEndDate(date)} />
                                <FaRegCalendarAlt className="absolute text-xl text-red-500 mt-14 ml-2"></FaRegCalendarAlt>

                            </li>
                            <li className="flex flex-col">
                                <button className="mt-12 md:mt-11 w-32 md:w-48 h-8 text-white font-bold ml-1 md:ml-10 bg-red-500 hover:shadow-lg rounded-lg hover:shadow-red-300 duration-150">SEARCH</button>
                            </li>
                        </div>
                        
                    </ul>

                </div>

            </div>
        </div>
    )
}