import React from 'react';
import { UserData } from '../lib/data';
import UserTable from '@/components/UserTable';
import { deleteUser } from '../lib/action';

const Users = async () => {
    const users = await UserData()

    return (
        <div className='container mx-auto'>
            <h1>Users:{users.length} </h1>
            <UserTable users={users} deleteUser={deleteUser} />
        </div>
    );
};

export default Users;