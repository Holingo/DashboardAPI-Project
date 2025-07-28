import React from 'react';

const PortalComponent = () => {
    return (
        <main className="flex-grow w-full flex flex-col justify-between items-center text-center">

            {/* Section hero portal */}
            <div className="w-full bg-[#111416] text-white flex flex-col items-center justify-center px-4 py-12">
                <section className="max-w-3xl flex flex-col h-[70vh] space-y-9 py-4">
                    <h1 className="font-light text-7xl bg-gradient-to-r from-blue-500 via-pink-300 to-red-400 bg-clip-text text-transparent mt-auto">
                        Hello World!<br/> In my beautiful world
                    </h1>
                    <a href="/login"
                       className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        The world is powered by open source software. Start exploring my program, from which I have learned many skills. Log in and let's get started!
                    </a>

                    <div className="inline-block mx-auto bg-gradient-to-r from-blue-500 via-pink-300 to-red-400 hover:from-blue-400 hover:via-pink-200 hover:to-red-300 p-[1px] mt-auto">
                        <a data-scroll-to="more"
                            className="uppercase flex items-center space-x-2 text-white font-semibold px-6 py-3 bg-[#111416] hover:text-gray-300 transition-colors">
                            <span>Discover more</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>

            {/* Sekcja trzech kolumn */}
            <section id="more" className="w-full bg-white text-[#111416] mt-20 py-16 px-6">
                <div className="max-w-6xl mx-auto text-left font-normal mb-12">
                    <h2 className="text-4xl bg-clip-text">
                        Explore More Possibilities
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg font-mono">
                        Discover how this portal can improve your journey through knowledge and creativity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-[#161a1d] p-6 rounded-xl shadow-lg hover:shadow-pink-400/20 transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-pink-300">Learn</h3>
                        <p className="text-gray-400">
                            Access resources and examples that helped me grow as a developer. Learn by doing.
                        </p>
                    </div>

                    <div className="bg-[#161a1d] p-6 rounded-xl shadow-lg hover:shadow-blue-400/20 transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-blue-400">Build</h3>
                        <p className="text-gray-400">
                            Use real-life project inspiration to build your own apps and systems step by step.
                        </p>
                    </div>

                    <div className="bg-[#161a1d] p-6 rounded-xl shadow-lg hover:shadow-red-400/20 transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-red-400">Share</h3>
                        <p className="text-gray-400">
                            Join the open-source movement and share your progress with others in the community.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default PortalComponent;