import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-[#111416] text-white relative">
            <div className="flex items-center justify-center h-16 text-sm text-center">
                <p className="text-sm">All rights reserved &copy; 2025 by Holingo</p>
            </div>
            <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-400" />
        </footer>
    );
};

export default FooterComponent;