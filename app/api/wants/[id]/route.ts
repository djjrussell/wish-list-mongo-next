import connectMongoDB from '@/libs/mongodb';
import Wants from '@/models/Wants';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest, { params }: any) => {
    const { id } = params;
    const { name, notes, rating } = await request.json();
    await connectMongoDB();
    await Wants.findByIdAndUpdate(id, { name, notes, rating })
    return NextResponse.json({message: "Want updated"}, {status: 200});
}

export const GET = async (_: NextRequest, { params }: any) => {
    const { id } = params;
    await connectMongoDB();
    const want = await Wants.findOne({_id: id})
    return NextResponse.json({want}, {status: 200});
}