import connectMongoDb from "@/libs/mongodb";
import Wants from '@/models/Wants'
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const { name, notes, rating } = await request.json();
    await connectMongoDb();
    await Wants.create({name, notes, rating})
    return NextResponse.json({message: "Want created"}, {status: 201});
}

export const GET = async () => {
    await connectMongoDb();
    const wants = await Wants.find()
    return NextResponse.json(wants, {status: 200});
}

export const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDb();
    await Wants.findByIdAndDelete(id)
    return NextResponse.json({message: "Want deleted"}, {status: 200});
}