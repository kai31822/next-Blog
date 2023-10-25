//update profile
import { NextRequest, NextResponse } from "next/server";
//zod
import { z } from 'zod';
//prisma
import prisma from "@/app/components/client";

// update profile
export const findUserSchema = z.object({
    email: z.string().max(255),
    bio: z.string().max(255)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = findUserSchema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //update profile
    const user = await prisma.user.update({
        // option + esc
        where: {
            email: body.email
        },
        data: {
            profile: {
                upsert: {
                    create: {
                        bio: body.bio
                    },
                    update: {
                        bio: body.bio
                    }
                }
            }
        }
    })
    //return data json
    return NextResponse.json(user, { status: 201 })
}
