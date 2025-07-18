import React, {useEffect, useState} from 'react';
import { listUsers } from '../services/UserService'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        listUsers().then((response) => {
          setUsers(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className='container mx-auto'>
        <h2 className="text-center text-2xl font-bold py-2">List of Users</h2><br/>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="table-auto min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                        <th scope="col" >ID</th>
                                        <th scope="col" >Username</th>
                                        <th scope="col" >Password</th>
                                        <th scope="col" >Email</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        users.map(user =>
                                            <tr key={user.id} className='text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800'>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>{user.email}</td>
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