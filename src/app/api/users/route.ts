import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongo';
import User from '@/models/user-model';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const user = await User.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  try {
    const deletedUser = await User.deleteOne({ _id: req.body.id });
    if (!deletedUser) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
