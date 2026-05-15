





import { revalidatePath } from "next/cache"

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