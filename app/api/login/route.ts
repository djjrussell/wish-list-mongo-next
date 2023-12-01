import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const {
            email, username, password
        } = await req.json();

        console.log("----------->>>>>>>>>>>>>>>>>>>>>>email", email);
        console.log("----------->>>>>>>>>>>>>>>>>>>>>>username", username);
        console.log("----------->>>>>>>>>>>>>>>>>>>>>>password", password);
        return NextResponse.json({message: "user registered"}, {status: 201})
    } catch(e) {
        return NextResponse.json("error occured while registering user", {status: 500})
    }
}