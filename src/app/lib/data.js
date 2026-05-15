

export const UserData = async () => {
    const res = await fetch('http://localhost:9000/users')
    return res.json()
};


export const GetUserById = async (id) => {
    const res = await fetch(`http://localhost:9000/users/${id}`)
    const data = await res.json()
    return data
}