import connectMongoDB from '@/libs/mongo/mongodb';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const { password, username, email } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { password, username, email })
    return NextResponse.json({message: "User updated"}, {status: 200});
}

export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({_id: id})
    return NextResponse.json({user}, {status: 200});
}

