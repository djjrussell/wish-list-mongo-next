import connectMongoDb from "@/libs/mongo/mongodb";
import User from '@/models/User'
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const { fname, mname, lname, username, email } = await request.json();
    await connectMongoDb();
    await User.create({ fname, mname, lname, username, email })
    return NextResponse.json({message: "User created"}, {status: 201});
}

export const GET = async () => {
    await connectMongoDb();
    const users = await User.find()
    return NextResponse.json(users, {status: 200});
}

export const DELETE = async (request: NextRequest) => {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDb();
    await User.findByIdAndDelete(id)
    return NextResponse.json({message: "User deleted"}, {status: 200});
}