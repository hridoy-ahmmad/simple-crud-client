import React from 'react';
import { UserData } from '../lib/data';
import UserTable from '@/components/UserTable';

const Users = async () => {
    const users = await UserData()

    return (
        <div className='container mx-auto'>
            <h1>Users:{users.length} </h1>
            <UserTable users={users} />
        </div>
    );
};

export default Users;