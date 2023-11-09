import React from 'react'


const getUser = async (userid: string) => {


    const res = await fetch(`http://localhost:3000/api/users/${userid}`, { method: "GET" })
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export default getUser
