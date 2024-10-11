import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongo';
import User from "@/models/user-model"

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json({ success: true, data: users });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const user = await User.create(body);
  return NextResponse.json({ success: true, data: user });
}
