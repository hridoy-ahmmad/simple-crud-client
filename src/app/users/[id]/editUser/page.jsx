import { editUser } from '@/app/lib/action';
import { GetUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const EditUser = async ({ params }) => {
    const { id } = await params
    const user = await GetUserById(id)

    const updateUser = async (formData) => {
        "use server"
        await editUser(formData, id)
    }


    return (
        <div className='w-1/2 mx-auto'>
            <h1>Edit Info: </h1>
            <form action={updateUser} className="flex flex-col gap-4 p-5  bg-gray-100">
                <TextField className="w-full" name="name" type="text" defaultValue={user.name}>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="email" type="email" defaultValue={user.email}>
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                </TextField>
                <TextField className="w-full" name="address" defaultValue={user.address}>
                    <Label>Address</Label>
                    <Input placeholder="Enter your address" />
                </TextField>
                <div className='flex gap-2'>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" slot="close">Edit user info</Button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;