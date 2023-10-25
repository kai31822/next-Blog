//delete
import { NextRequest, NextResponse } from "next/server";
//zod
import { z } from 'zod';
//prisma
import prisma from "@/app/components/client";

// delete
export const findUserSchema = z.object({
    email: z.string().min(1, 'email is required.').max(255),
    id: z.string()
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = findUserSchema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //delete
    const profile = await prisma.profile.delete({
        where: {
            userId: body.id
        }
    })
    const post = await prisma.post.deleteMany({
        where: {
            authorId: body.id
        }
    })
    const user = await prisma.user.delete({
        // option + esc
        where: {
            email: body.email
        }
    })

    //return data json
    return NextResponse.json("user deleted", { status: 201 })
}
