import React, { useEffect, useState } from 'react';
import { listUsers, deleteUser } from '../services/UserService'
//import { useNavigate } from 'react-router-dom'

import UserModal from "./UserComponent.tsx";

const SortIcon = ({ direction } : { direction: 'asc' | 'desc' | null }) => {
    return (
        <svg
            className={`w-4 h-4 inline ml-1 ${direction ? 'opacity-100' : 'opacity-0'} transition duration-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            {direction === 'asc' ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                />
            ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            )}
        </svg>
    );
};

const ListUserComponent = () => {

    const [users, setUsers] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [editUserId, setEditUserId] = useState<number | null>(null); // Stan dla ID użytkownika do edycji
    const [sortField, setSortField] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');

    //const navigate = useNavigate();

    const refreshUsers = () => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    // Funkcja do obsługi przycisku Edit
    const updateUser = (userId: number) => {
        setEditUserId(userId);
        setModalOpen(true);
    };

    const handleDeleteUser = (userId: number) => {
        deleteUser(userId)
            .then(() => {
                console.log(`User with ID ${userId} deleted`);
                refreshUsers();
            }).catch((error) => {
                console.log(error);
        });
    };

    const sortUsers = (usersToSort: any[]) => {
        return [...usersToSort].sort((a, b) => {
            let aValue = a[sortField];
            let bValue = b[sortField];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (aValue < bValue) {
                return sortDirection === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
    };

    // Zmiana kryterium sortowania
    const handleSortChange = (field: string) => {
        setSortField(field);
        setSortDirection(sortField === field && sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const sortedUsers = sortUsers(users);

    return (
        <div className='container mx-auto'>
            <h2 className="text-center text-2xl font-bold py-2">List of Users</h2><br/>
            <button onClick={() => { setModalOpen(true); setEditUserId(null); }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New User</button>
            <UserModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setEditUserId(null);
                    refreshUsers(); // Odswiez liste
                }}
                editUserId={editUserId}
            />
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="table-auto text-xs min-w-full divide-y divide-gray-200">
                                <thead>
                                <tr className="bg-gray-50 ">
                                    <th className="px-6 py-3 text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSortChange('id')}>
                                        ID
                                        <SortIcon direction={sortField === 'id' ? sortDirection : null} />
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSortChange('username')}>
                                        Username
                                        <SortIcon direction={sortField === 'username' ? sortDirection : null} />
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSortChange('password')}>
                                        Password
                                        <SortIcon direction={sortField === 'password' ? sortDirection : null} />
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSortChange('email')}>
                                        Email
                                        <SortIcon direction={sortField === 'email' ? sortDirection : null} />
                                    </th>
                                    <th className="px-6 py-3 text-left text-gray-500 uppercase">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {
                                    sortedUsers.map(user =>
                                        <tr key={user.id}
                                            className='border-b border-gray-200 text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>{user.email}</td>
                                            <td className="inline-flex gap-x-4 text-sm font-semibold font-medium">
                                                <button type="button" onClick={() => updateUser(user.id)} className="border border-transparent  text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 hover:underline">Edit</button>

                                                <button type="button" onClick={() => handleDeleteUser(user.id)} className="border border-transparent text-red-600 hover:text-red-800 focus:outline-hidden focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400 hover:underline">Delete</button>
                                            </td>
                                        </tr>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListUserComponent;