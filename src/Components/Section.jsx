import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";


export default function Section(){

    return (
        <div >
            <div className="container font-open md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
                <div className="text-center">
                    <h1 className=" mt-5 md:mt-32 font-bold text-xl">Plan your trip now</h1>
                    <div className="flex">
                        <p className="md:text-5xl text-3xl ml-20 text-center font-bold">Save <a className="text-red-500 text-center font-bold md:text-5xl">money</a>  and</p>
                    </div>
                    <p className="font-bold text-3xl md:text-5xl">get your car</p>
                    <p className="mt-7 text-gray-700 p-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bg-red-500 text-white font-bold text-lg mt-10 w-36 h-12 rounded-lg hover:shadow-red-300 duration-150 shadow-lg">Book Now</button>
                    <button className="bg-black text-white font-bold text-lg  ml-10 mt-10 w-36 h-12 rounded-lg hover:shadow-neutral-900 duration-150 shadow-lg">Learn More </button>

                   
                </div>
                <div>
                    <Carousel
                    
                    autoPlay
                    className="mt-10 p-8 md:p-0 md:ml-10">
                        <div>
                            <img src="https://purepng.com/public/uploads/large/red-car-ezq.png" alt="" />
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/originals/03/5c/6d/035c6d9e39fe11852356f5d9d39bb015.png" alt="" />
                        </div>
                        <div>
                            <img src="https://pngimg.com/d/toyota_PNG1917.png" alt="" />
                        </div>
                        <div>
                            <img src="https://s7g10.scene7.com/is/image/hyundaiautoever/NX4-DE-NC17AGTW51JC5XH384WRTNNB-TG1-NNB-52910N9300.001?wid=1280&hei=720&fmt=png-alpha&fit=wrap,1" alt="" />
                        </div>
                        <div>
                            <img src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-accord-incentives-specials-offers-moon-25.png" alt="" />
                        </div>
                        <div>
                            <img src="https://purepng.com/public/uploads/large/purepng.com-hyundai-ioniq-white-carcarvehicletransporthyundai-961524653528qvh7u.png" alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}