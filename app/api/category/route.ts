import { NextRequest, NextResponse } from "next/server";
import { createCategorySchema } from "@/app/validationSchemas";
//prisma
import prisma from "@/app/components/client";

export async function POST(request: NextRequest) {
    //request data
    const body = await request.json()
    //validation data
    const validation = createCategorySchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }
    //create category
    const newcategory = await prisma.category.create({
        // option + esc
            data: {
                name: body.name
            },



    })
    //return data json
    return NextResponse.json(newcategory, { status: 201 })

}
