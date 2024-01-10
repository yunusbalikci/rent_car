import { useState } from "react"
export default function Models(){
    const [selectedCar, setSelectedCar] = useState(null)

    const carModels = [
        {
            id: 1,
            name: "Mazda",
            image: "https://purepng.com/public/uploads/large/red-car-ezq.png",
            engine: "1.5",
            models:"Mazda CX-3",
            color:"Red",
            seat:"5",
            year:"2021"
        },
        {
            id: 2,
            name: "Honda",
            image: "https://honda-bandung.id/wp-content/uploads/2021/05/civic-promo.png",
            engine: "1.5",
            models:"Honda CIVIC",
            color:"White",
            seat:"5",
            year:"2020"
            
        },
        {
            id: 3,
            name: "Wolsvagen",
            image: "https://i.pinimg.com/originals/03/5c/6d/035c6d9e39fe11852356f5d9d39bb015.png",
            engine: "2.3",
            models:"Wolsvagen GOLF",
            color:"White",
            seat:"5",
            year:"2022"
        },
        {
            id: 4,
            name: "Hyndai ",
            image: "https://s7g10.scene7.com/is/image/hyundaiautoever/NX4-DE-NC17AGTW51JC5XH384WRTNNB-TG1-NNB-52910N9300.001?wid=1280&hei=720&fmt=png-alpha&fit=wrap,1",
            engine: "2.3",
            models:"Hyndai Tucson",
            color:"Blue",
            seat:"5",
            year:"2020"
        },
        {
            id: 5,
            name: "Toyota",
            image: "https://pngimg.com/d/toyota_PNG1917.png",
            engine: "2.3",
            models:"Toyota Corolla",
            color:"White",
            seat:"5",
            year:"2018"
        }
    ]

    const handlePickCar = (car) => {
        setSelectedCar(car)
    }

    return(
        <div className="pt-10 font-open pb-10">
            <h1 className="text-center text-3xl font-bold">Vehicle Models</h1>
            <h1 className="text-center text-4xl font-bold">Select model to see details.</h1>
            <p className="text-center p-1 md:p-0 text-sm md:text-lg mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ut magnam ipsam ducimus aspernatur debitis incidunt quidem, modi eos quasi enim?</p>
            <div className="container flex mt-10">
                <div className="w-1/3">
                    <h1 className="font-bold text-xl p-1 md:p-0 md:text-4xl cursor-default">Select Model</h1>
                    <ul className="flex ml-3 md:ml-0 flex-col p-1 mt-10 space-y-4 cursor-pointer">
                        {carModels.map((car) => (
                            <li className="md:h-10 w-28 md:w-36 text-center text-white p-1 uppercase font-bold  md:text-xl rounded-md bg-black" key={car.id} onClick={() => handlePickCar(car)}>
                                {car.name}
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="w-2/3 flex">
                    {selectedCar && (
                        <div className="hidden md:block w-96 h-72 object-cover">
                            <img src={selectedCar.image} alt="" />
                        </div>
                    )}
                    {selectedCar && (
                        <div className="ml-10 mt-14 md:mt-0 md:ml-16 font-bold">
                        <p className="font-bold text-xl md:text-4xl rounded-md bg-red-500 p-2 text-white whitespace-nowrap">{selectedCar.models}</p>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Engine
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                {selectedCar.engine}
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Color
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                {selectedCar.color}
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Seat
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                {selectedCar.seat}
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Year
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                {selectedCar.year}
                            </li>
                            
                        </ul>
                       
                        </div>
                    )}
                    {!selectedCar && (
                        <div className="invisible md:visible w-96 h-72 object-cover">
                        <img src="https://purepng.com/public/uploads/large/red-car-ezq.png" alt="" />
                    </div>
                    )}
                    {!selectedCar && (
                        <div className="ml-16 font-bold">
                        <p className="font-bold text-4xl rounded-md bg-red-500 p-2 text-white">Mazda CX-3</p>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Engine
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                1.5
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Color
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                Red
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Seat
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                5
                            </li>
                            
                        </ul>
                        <ul className="flex space-x-2 mt-3">
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 w-1/2 p-2 ">
                                Year
                            </li>
                            <li className="bg-gray-50 rounded-md shadow-sm hover:shadow-lg duration-150 hover:border hover:border-red-400 w-1/2 p-2 ">
                                2021
                            </li>
                            
                        </ul>
                      
                    </div>
                    )}
                    
                    
                    
                </div>
            </div>
            <p className="mt-10 text-center uppercase opacity-70 text-sm">All rights reserved @ Yunus Balıkcı</p>
        </div>
    )
}