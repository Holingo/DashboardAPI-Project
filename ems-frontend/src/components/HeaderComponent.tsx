import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header className="mx-auto px-2 bg-black">
                <a href="/" className="text-2xl font-medium text-white px-10">Users Managment System</a>
                <nav className="flex sm:justify-center space-x-4 py-4 px-6">
                    {[
                        ['Home', '/'],
                        ['About', '/about'],
                        ['Project', '/project'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-gray-900">{title}</a>
                    ))}
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;