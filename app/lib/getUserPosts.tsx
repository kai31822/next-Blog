
const getUserPosts = async (userid: string) => {

    const res = await fetch(`http://localhost:3000/api/post/${userid}`, { method: "GET" })
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export default getUserPosts

