import React, { useState, useEffect } from 'react';
import { createUser, getUser, updateUser } from '../services/UserService';
//import { useNavigate } from 'react-router-dom';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    editUserId?: number | null;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, editUserId }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //const navigator = useNavigate();

    // Wypełnienie formularza danymi użytkownika w trybie edycji
    useEffect(() => {
        if (editUserId) {
            getUser(editUserId).then((response) => {
                setUsername(response.data?.username);
                setPassword(response.data?.password);
                setEmail(response.data?.email);
            }).catch(error => console.log(error));
        } else {
            // Resetuj formularz, jeśli nie edytujemy
            setUsername('');
            setPassword('');
            setEmail('');
        }
    }, [editUserId]);

    function saveUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = { username, password, email };
        console.log(user);

        if (editUserId) {
            // Tryb edycji
            updateUser(editUserId, user).then((response) => {
                console.log(response);
                onClose();
            }).catch(error => console.log(error));
        } else {
            createUser(user).then((response) => {
                console.log(response);
                onClose(); // zamknięcie modala
                //navigator('/project'); // możesz też to usunąć jeśli nie chcesz przekierowania
            }).catch(error => console.log(error));
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="container mx-auto">
                <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl">
                    <div className="relative block border-2 rounded-lg p-10 bg-white shadow border-gray-500 border-opacity-60 overflow-hidden">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <div className="flex min-h-full flex-1 flex-col justify-center">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                    {editUserId ? 'Edit User' : 'Create New User'} {/* Dynamiczny tytuł */}
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
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            name="password"
                                            type={editUserId ? 'text' : 'password'}
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

                                <div className="flex flex-col w-full justify-center space-y-2">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        {editUserId ? 'Update User' : 'Add New User'} {/* Dynamiczny tekst przycisku */}
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
