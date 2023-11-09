//Find Post
import { NextRequest, NextResponse } from "next/server";
//prisma
import prisma from "@/app/components/client";
import { deletePostSchema } from "@/app/validationSchemas";

//delete
export async function DELETE(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = deletePostSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }

    const userPosts = await prisma.post.delete({
        where: {
            id: body.id
        },

    })
    //return data json


    return NextResponse.json(userPosts, { status: 201 })
}
