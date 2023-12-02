import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongo/mongodb";
import bcrypt from 'bcryptjs';

export const POST = async (request: NextRequest) => {
    try {
        const {
            email, username, password
        } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDb();
        await User.create({email, username, password: hashedPassword});
        return NextResponse.json({message: "user registered"}, {status: 201});

    } catch(e) {
        return NextResponse.json({message: "error occured while registering user"}, {status: 500})
    }
}