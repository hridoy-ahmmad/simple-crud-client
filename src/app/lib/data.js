

export const UserData = async () => {
    const res = await fetch('http://localhost:9000/users')
    return res.json()
};
