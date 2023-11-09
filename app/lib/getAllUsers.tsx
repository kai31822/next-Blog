import React from 'react'

const getAllUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users/findmany',{method:"POST"})
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()

}

export default getAllUsers
