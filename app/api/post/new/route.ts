//Create Post
import { NextRequest, NextResponse } from "next/server";
//prisma
import prisma from "@/app/components/client";

// createIssue
import { createPostSchema } from '@/app/validationSchemas'

export async function POST(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = createPostSchema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //create Post
    const newPost = await prisma.post.create({
        data: {
            title: body.title,
            context: body.context,
            authorId: body.userid,
            categories: body.categories,
            tags: body.tags
        }
    })
    //return data json
    return NextResponse.json(newPost, { status: 201 })
}
