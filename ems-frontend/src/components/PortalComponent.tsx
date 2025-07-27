import React from 'react';

const PortalComponent = () => {
    return (
        <div>
            <div className="w-full h-[70vh] bg-[#111416] flex flex-col justify-center items-center space-y-6 text-center px-4">
                <div className="max-w-3xl space-y-9 py-4">
                    <h1 className="font-light text-7xl bg-gradient-to-r from-blue-500 via-pink-300 to-red-400 bg-clip-text text-transparent">
                        Hello World! In my beautiful world.
                    </h1>
                    <a href="/login" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
                        The world is powered by open source software. Start exploring my program, from which I have learned many skills. Log in and let's get started!
                    </a>
                </div>
                <div className="max-w-md bg-gradient-to-r from-blue-500 via-pink-300 to-red-400 hover:from-blue-400 hover:via-pink-200 hover:to-red-300 p-[1px]">
                    <button className="uppercase flex items-center space-x-2 text-white font-semibold px-6 py-3 bg-[#111416]">
                        <span>Discover more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortalComponent;