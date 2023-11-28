import connectMongoDB from '@/libs/mongodb';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest, { params }: any) => {
    const { id } = params;
    const { fname, mname, lname, username, email } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { fname, mname, lname, username, email })
    return NextResponse.json({message: "User updated"}, {status: 200});
}

export const GET = async (request: NextRequest, { params }: any) => {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({_id: id})
    return NextResponse.json({user}, {status: 200});
}

