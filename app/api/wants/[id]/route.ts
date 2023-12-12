import connectMongoDB from '@/libs/mongo/mongodb';
import Wants from '@/models/Wants';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const { name, notes, rating, userId } = await request.json();
    await connectMongoDB();
    await Wants.findByIdAndUpdate(id, { name, notes, rating, userId })
    return NextResponse.json({message: "Want updated"}, {status: 200});
}

export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    await connectMongoDB();
    const want = await Wants.findOne({_id: id})
    return NextResponse.json({want}, {status: 200});
}