import React from 'react'
type Props = {
    promise: Promise<Post[]>
}
const UserPosts = async ({ promise }: Props) => {
    const posts = await promise
    const content = posts.map((post, index) => {
        return (
            <article key={index}>
                <h2>{post.title}</h2>
                <p>{post.context}</p>
                <br />
            </article>
        )
    })
    return content
}

export default UserPosts
