import { FaCar } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";

export default function Detail(){
    return (
        <div>
            <div className="mt-36 mb-10">
                <h1 className="text-center text-5xl text-red-500 font-bold">QUICK AND EASY </h1>
                <h2 className="text-center text-lg mt-2 font-bold">Book now and start the journey</h2>
                
                <div className="container mt-10 grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="flex border-2 border-red-200 hover:border-red-500 duration-150 shadow-lg rounded-md pb-20 pt-10 flex-col justify-center items-center" >
                        <FaCar className="text-6xl text-red-500" />
                        <h1 className="font-bold mt-3 text-3xl">Select car</h1>
                        <p className="mt-1 ml-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex border-2 border-red-200 hover:border-red-500 duration-150 shadow-lg rounded-md pb-20 pt-10  flex-col justify-center items-center">
                        <RiCustomerService2Line className="text-6xl text-red-500" />
                        <h1 className="font-bold mt-3 text-3xl">Operation and support</h1>
                        <p className="mt-1 ml-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="flex border-2 border-red-200 hover:border-red-500 duration-150 shadow-lg rounded-md pb-20 pt-10  flex-col justify-center items-center">
                        <BsCashCoin className="text-6xl text-red-500" />
                        <h1 className="font-bold mt-3 text-3xl">Save your money</h1>
                        <p className="mt-1 ml-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
    
            </div>
        </div>
    )
}