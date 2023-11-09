import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "@/app/components/UserPosts";



type Params = {
    params: {
        userId: string
    }
}



const UserPage = async ({ params: { userId } }: Params) => {


    const userData: Promise<User> = await getUser(userId)
    const userPostsData: Promise<Post[]> = await getUserPosts(userId)
    // const [user, userPosts] = await Promise.all([userData, userPostsData])
    const user = await userData


    return (

        <div>
            <h2>user</h2>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
        </div>


    )


}

export default UserPage
