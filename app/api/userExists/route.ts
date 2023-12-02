import connectMongoDb from "@/libs/mongo/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        await connectMongoDb();
        const {email} = await request.json();
        const user = await User.findOne({email}).select("_id");

        return NextResponse.json({user})
    } catch(e) {
        console.log(e)
    }

}