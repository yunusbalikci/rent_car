import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


export default function Section(){
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div >
            <div className="container grid grid-cols-2 grid-rows-1 gap-4">
                <div>

                    <div className="flex mt-20">
                        <h1 className="text-gray-700 text-3xl">RENT</h1>
                        <h1 className="text-red-700 text-3xl">ER</h1>
                        <p className="text-gray-700 text-lg mt-1 ml-2">is the most popular rent a car service.Easily find your car at the best price and get it delivered to your door.</p>
                    </div>

                    <div className="mt-20 border-red-300 rounded-lg shadow-md border-2 border-opacity-40 flex p-2 flex-wrap">
                        <div>
                            <label>Name</label>
                            <input className="border pl-2 border-gray-300 rounded-lg shadow-md w-28 focus:border-red-300 outline-none ml-3" type="text" />
                        </div>
                        <div className="ml-4">
                            <label>Surname</label>
                            <input className="border pl-2 border-gray-300 rounded-lg shadow-md w-28 focus:border-red-300 outline-none ml-3" type="text" />
                        </div>
                        <div className="ml-5">
                            <label>City</label>
                            <input className="border pl-2 border-gray-300 rounded-lg shadow-md w-28 focus:border-red-300 outline-none ml-3" type="text" />
                        </div>
                        
                        <div className="mt-5 ">
                            <label>Phone</label>
                            <input className="border pl-2 border-gray-300 rounded-lg shadow-md w-28 focus:border-red-300 outline-none ml-2" type="number" />
                        </div>
                        <div className="ml-5">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                    </div>
                    

                   
                </div>
                <div>
                    <Carousel className="mt-10">
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