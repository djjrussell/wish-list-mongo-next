import connectMongoDb from "@/libs/mongo/mongodb";
import Wants from '@/models/Wants'
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const { name, notes, rating, userId } = await request.json();
    await connectMongoDb();
    await Wants.create({name, notes, rating, userId})
    return NextResponse.json({message: "Want created"}, {status: 201});
}

export const GET = async (request: NextRequest) => {
    const userId = request.nextUrl.searchParams.get('userId')
    await connectMongoDb();
    const wants = await Wants.find({userId})
    return NextResponse.json(wants, {status: 200});
}

export const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDb();
    await Wants.findByIdAndDelete(id)
    return NextResponse.json({message: "Want deleted"}, {status: 200});
}