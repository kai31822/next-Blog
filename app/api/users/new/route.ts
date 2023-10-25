//Create User
import { NextRequest, NextResponse } from "next/server";
//zod
import { z } from 'zod';
//prisma
import prisma from "@/app/components/client";
//bcrypt
import * as bcrypt from "bcrypt"

// create user
export const createUserSchema = z.object({
    email: z.string().min(1, 'email is required.').max(255),
    name: z.string().max(20),
    password: z.string().min(8, 'Password is required.').max(25)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = createUserSchema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //create New Issue
    const newUser = await prisma.user.create({
        data: {
            // option + esc
            email: body.email,
            name: body.name,
            password: await bcrypt.hash(body.password, 10),
            // profile: {
            //     create: {
            //         bio: "test"
            //     }
            // }
        },
        // include: {
        //     profile: true,
        // }
    })
    const { password, ...result } = newUser
    //return data json
    return NextResponse.json(result, { status: 201 })
}
