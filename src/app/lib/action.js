





import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const deleteUser = async (id) => {
    "use server"
    const res = await fetch(`http://localhost:9000/users/${id}`, {
        method: 'DELETE',
    })
    const data = await res.json()
    revalidatePath('/users')
    return data
}

export const addUser = async (formData) => {
    'use server'
    const user = Object.fromEntries(formData.entries())
    console.log('new user', user);

    const res = await fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    const data = await res.json()
    console.log('data set successfull', data);
    if (data.insertedId) {
        revalidatePath('/users')
    }

    return data

}

export const editUser = async (formData, id) => {

    'use server'
    const userInfo = Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:9000/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data =await res.json()
    console.log('data updated successfully', data);
    if (data.modifiedCount > 0) {
        revalidatePath('/users')
        redirect('/users')
    }
    return data
}