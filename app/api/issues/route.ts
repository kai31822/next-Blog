//Create Issue
import { NextRequest, NextResponse } from "next/server";
//zod
import { z } from 'zod';
//prisma
import prisma from "@/app/components/client";

// createIssue
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Title is required.').max(255)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    //we have to validate our request to make sure it doesn't have bed data
    const validation = createIssueSchema.safeParse(body);


    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //create New Issue
    const newIssue = await prisma.user.update({
        where: {
            //待修改為使用者自己的id  測試用1
            id: 1
        },
        data: {
            Issues: {
                createMany: {
                    data: [
                        { title: body.title, description: body.description }
                    ]
                }
            }
        }
    })
    //return data json
    return NextResponse.json(newIssue, { status: 201 })
}
