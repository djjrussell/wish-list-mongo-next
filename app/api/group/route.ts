import connectMongoDb from "@/libs/mongo/mongodb";
import User from '@/models/User'
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    await connectMongoDb();
    const wants = await User.aggregate([
        {
            $lookup: {
                from: "wants",
                localField: "_id",
                foreignField: "userId",
                as: "wants"
            }
        }
    ])

    return NextResponse.json(wants, {status: 200});
}
