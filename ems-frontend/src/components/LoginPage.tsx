// src/components/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {

    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/discord';
    }

    return (
        <div className="min-h-screen bg-[#111416] flex items-center justify-center">
            <div className="relative p-[3px] rounded-sm bg-gradient-to-br from-blue-500 via-pink-300 to-red-400 shadow-lg w-full max-w-5xl h-[400px]" >
                <div className="flex h-full rounded-sm bg-[#111416] overflow-hidden">

                    {/* Left side of */}
                    <div className="w-1/2 p-8 flex flex-col justify-center text-white">
                        <h2 className="text-3xl font-light mb-4">Zaloguj się przez Discord</h2>
                        <p className="text-sm opacity-70">
                            Używamy Discorda do logowania, aby zapewnić bezpieczeństwo, łatwe zarządzanie użytkownikami i połaczenie z Twoim kontem.
                        </p>
                    </div>

                    {/* Right side of */}
                    <div
                        className="w-1/2 text-white bg-[#111416] flex items-center justify-center cursor-pointer hover:bg-[#2c2f33] hover:text-gray-300 transition-all"
                        onClick={() => handleLogin()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="size-24" viewBox="0 0 16 16">
                            <path
                                d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                        <span className="font-semibold text-lg px-4">Zaloguj się!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;