



"use server"

import { revalidatePath } from "next/cache"

export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:9000/users/${id}`, {
        method: 'DELETE',
    })
    const data = await res.json()
    revalidatePath('/users')
    return data
}