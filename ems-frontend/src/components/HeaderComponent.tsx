import React from 'react';
import logo from '../assets/logo_dashboard.svg';

const HeaderComponent = () => {
    return (
        <div>
            <header className="bg-[#111416] w-full">
                <div className="flex items-center justify-between relative px-9 py-8 xl:py-0">

                    <div className="flex items-center space-x-2 z-10">
                        <a href="/">
                            <img src={logo} alt="Users Managment System" className="h-20 hidden xl:block" />
                        </a>
                    </div>

                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4">
                        {[
                            ['Home', '/'],
                            ['About', '/about'],
                            ['Project', '/project'],
                            ['Contact', '/contact'],
                        ].map(([title, url]) => (
                            <a href={url} className="rounded-lg px-3 py-2 text-white font-semibold text-base hover:bg-slate-100 hover:text-gray-900">{title}</a>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default HeaderComponent;