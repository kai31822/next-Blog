//Find User
import { NextRequest, NextResponse } from "next/server";
//zod
import { z } from 'zod';
//prisma
import prisma from "@/app/components/client";

// find user
// export const findUserSchema = z.object({
//     email: z.string().min(1, 'email is required.').max(255),

// });

export async function POST(request: NextRequest) {
    // const body = await request.json();
    // //we have to validate our request to make sure it doesn't have bed data
    // const validation = findUserSchema.safeParse(body);


    // if (!validation.success) {
    //     return NextResponse.json(validation.error.format(), { status: 400 })
    // }
    //create New Issue
    const user = await prisma.user.findMany({
        // option + esc
        // where: {
        //     email: body.email
        // },
        orderBy: {
            email: "asc"
        }


    })
    //return data json
    return NextResponse.json(user, { status: 201 })
}
