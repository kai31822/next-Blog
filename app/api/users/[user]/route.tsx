//Find Post
import { NextRequest, NextResponse } from "next/server";
//prisma
import prisma from "@/app/components/client";
import { verifyJWT } from "@/app/lib/jwt";


export async function GET(request: NextRequest, { params }: { params: { user: string } }) {
    //
    // const accessToken = request.headers.get("authorization")


    // if (!accessToken || verifyJWT(accessToken)) {
    //     return NextResponse.json({ error: "unauthorized" }, { status: 401 })
    // }
    //create New Issue
    const userPosts = await prisma.post.findMany({
        // option + esc
        where: {
            authorId: params.user
        },
        include: {
            author: {
                select: {
                    email: true,
                    name: true
                }
            }
        }



    })
    //return data json


    return NextResponse.json(userPosts, { status: 201 })
}
