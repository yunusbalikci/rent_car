
export default function Header() {
    return (
            <div className="w-full flex p-4 border-red-700 border-b-2 border-opacity-45">
                <div className="ml-20 flex space-x-16">
                    <div className="flex">
                        <img src="https://www.iconpacks.net/icons/2/free-car-icon-2901-thumb.png" className="h-11 text-red-400 ml-10 -rotate-90"  alt="" />
                        <h1 className="text-gray-600 uppercase text-3xl">RENT</h1>
                        <h1 className="text-red-700 uppercase text-3xl">ER</h1>
                    </div>
                    <div className="flex pl-20 mt-2 space-x-16">
                        <h1 className="text-zinc-950 uppercase font-bold text-xl">HOME</h1>
                        <h1 className="text-zinc-950 uppercase font-bold text-xl">CONTACT</h1>
                        <h1 className="text-zinc-950 uppercase font-bold text-xl">PRICE</h1>
                        <h1 className="text-zinc-950 uppercase font-bold text-xl">ABOUT</h1>
                    </div>
                    <div className="flex space-x-6 pl-20 pb-1">
                        <button className="text-white text-xl bg-red-500 w-32 shadow-xl shadow-red-200 font-bold rounded-md ">LOG IN</button>
                        <button className="text-zinc-950 text-xl font-bold ">SIGN UP</button>
                    </div>
                    
                
                </div>
            </div>
    );
}