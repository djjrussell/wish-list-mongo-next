import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        await req.json();
        return NextResponse.json({message: "user registered"}, {status: 201})
    } catch(e) {
        return NextResponse.json("error occured while registering user", {status: 500})
    }
}