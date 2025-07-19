import React, { useState } from 'react';
import { createUser } from '../services/UserService.js';
import { useNavigate } from 'react-router-dom';

const UserComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    function saveUser(e) {
        e.preventDefault();

        const user = {username, password, email};
        console.log(user);

        createUser(user).then((response) => {
            console.log(response);
            navigator('/project')
        })
    }

    return (
        <div className="container">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create New User
                    </h2>
                </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={saveUser} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                name="username"
                                type="text"
                                placeholder="Enter Username"
                                value={username}
                                required
                                autoComplete="username"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add New User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserComponent;