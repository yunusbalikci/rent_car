import { FaCity } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="container">
            <div className=" mt-10">
                <div className="w-full h-36">
                    <ul className="pb-10">
                        <h1 className="text-3xl ml-10 font-bold">Book a car</h1>
                        <div className="flex flex-nowrap space-x-20">
                            <li className="flex ml-16 flex-col">
                                <label className="mt-5 font-bold">Pick up *
                                <IoLocationOutline className="absolute text-xl text-red-500 mt-3 ml-2"></IoLocationOutline>
                                </label>
                                <input className="border-2 w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type your city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Drop off *
                                <IoLocationOutline className="absolute text-xl text-red-500 mt-3 ml-2"></IoLocationOutline>
                                </label>
                                <input className="border-2 w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type your city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Select your car model
                                <FaCar className="absolute text-xl text-red-500 mt-3 ml-2"></FaCar>
                                </label>
                                <input className="border-2 w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type your city" type="text" />
                            </li>
                        </div>
                        <div className="flex flex-nowrap space-x-20">
                            <li className="flex ml-16 flex-col">
                                <label className="mt-5 font-bold">Pick up *
                                <FaRegCalendarAlt className="absolute text-xl text-red-500 mt-3 ml-2"></FaRegCalendarAlt>
                                </label>
                                <input className="border-2 w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type your city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <label className="mt-5 font-bold">Drop off *
                                <FaRegCalendarAlt className="absolute text-xl text-red-500 mt-3 ml-2"></FaRegCalendarAlt>
                                </label>
                                <input className="border-2 w-64 h-8 rounded-lg shadow-lg mt-1 pl-8 outline-none" placeholder="Type your city" type="text" />
                            </li>
                            <li className="flex flex-col">
                                <button className="mt-11 w-48 h-10 text-white font-bold ml-10 bg-red-500 hover:shadow-lg rounded-lg hover:shadow-red-300 duration-150">SEARCH</button>
                            </li>
                        </div>
                        
                    </ul>

                </div>

            </div>
        </div>
    )
}