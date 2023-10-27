import React from 'react'

const getUser = async (id: string, token: string) => {
    // const { data: session, status } = useSession()
    const response = await fetch(`http://localhost:3000/api/users/${id}}`, {
        method: "GET",
        headers: {
            authorization: `${token}`,
        }
    })
    if (!response.ok) {
        throw new Error('failed to fetch users')
    }
    return await response.json()
}

export default getUser
