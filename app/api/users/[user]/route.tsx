//Find Post
import { NextRequest, NextResponse } from "next/server";
//prisma
import prisma from "@/app/components/client";



export async function GET(request: NextRequest, { params }: { params: { user: string } }) {



    //find user posts
    const user = await prisma.user.findUnique({
        // option + esc
        where: {
            id: params.user
        },



    })
    //return data json

    return NextResponse.json(user, { status: 201 })
}
