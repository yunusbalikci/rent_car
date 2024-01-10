import React from 'react';

export default function Header() {
    return (
        <div className="w-full flex flex-col md:flex-row p-4 border-red-700 font-open border-b-2 border-opacity-45">
            <div className="md:ml-20 flex flex-col md:flex-row md:space-x-16 items-center">
                <div className="flex items-center">
                    <img src="https://www.iconpacks.net/icons/2/free-car-icon-2901-thumb.png" className="h-11 text-red-400 ml-10 -rotate-90" alt="" />
                    <h1 className="text-gray-600 uppercase text-3xl">RENT</h1>
                    <h1 className="text-red-700 uppercase text-3xl">ER</h1>
                </div>
                <div className="flex md:pl-20 mt-2 cursor-pointer space-x-6 md:space-x-16">
                    <h1 className="text-zinc-950 uppercase font-bold text-xl">HOME</h1>
                    <h1 className="text-zinc-950 uppercase font-bold text-xl">CONTACT</h1>
                    <h1 className="text-zinc-950 uppercase font-bold text-xl">PRICE</h1>
                    <h1 className="text-zinc-950 uppercase font-bold text-xl">ABOUT</h1>
                </div>
            </div>
            <div className="flex mt-4 md:mt-0 md:pl-20 pb-1">
                <button className="text-white text-xl bg-red-500 w-full md:w-32 md:mr-6 shadow-xl shadow-red-200 font-bold rounded-md mb-2 md:mb-0">LOG IN</button>
                <button className="text-zinc-950 text-xl font-bold w-full md:w-auto">SIGN UP</button>
            </div>
        </div>
    );
}
