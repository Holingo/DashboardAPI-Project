import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import logo from '../assets/logo_dashboard.svg';
import axios from 'axios';

interface User {
    username: string;
    avatarUrl: string;
}

const HeaderComponent = () => {

    const [user, setUser] = useState<User | null>(null);
    const location = useLocation();
    const hideLogin = location.pathname === "/login";

    useEffect(() => {
        axios.get('http://localhost:8080/api/users/me', { withCredentials: true }) // jeśli używasz ciastek (cookies)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                setUser(null); // nie zalogowany
            });
    }, []);

    return (
        <div>
            <header className="bg-[#111416] w-full">
                <div className="flex items-center justify-between relative px-9 py-8 xl:py-0">

                    <div className="flex items-center space-x-2 z-10">
                        <a href="/">
                            <img src={logo} alt="Users Managment System" className="h-16 hidden xl:block" />
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

                    <div className="z-10">
                        {user ? (
                            <div className="flex items-center space-x-4 text-white">
                                <img src={user.avatarUrl} alt={user.username}
                                     className="w-10 h-10 rounded-full border border-white"
                                />
                                <span className="font-semibold">{user.username}</span>
                                <button onClick={() => window.location.href = 'http://localhost:8080/logout'}
                                        className="text-white hover:text-gray-300 font-semibold border border-white px-4 py-2 rounded-lg transition-colors">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            hideLogin ? null : (
                                <a href="/login"
                                    className="text-white hover:text-gray-300 font-semibold border border-white px-4 py-2 rounded-lg transition-colors">
                                    Login
                                </a>
                            )
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderComponent;