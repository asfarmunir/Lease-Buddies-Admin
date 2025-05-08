import { connectToDatabase } from '@/lib/database';
import Admin from '@/lib/database/admin.modal';
import { NextRequest, NextResponse } from 'next/server';
interface Props {
  params: {
    id: string;
  };
}

export  async function PATCH(req: NextRequest, { params: { id } }: Props) {

  const { password, confirmPassword } = await req.json();
  await connectToDatabase();

  if (!password || !confirmPassword) {
    return NextResponse.json({ message: 'Please provide both passwords' }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
  }

  try {

    const token = req.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Token is missing' }, { status: 400 });
    }

    const user = await Admin.findOne({ _id: String(id) });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    if (!user.resetToken || user.resetToken !== token) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    if (!user.resetTokenExpiry || new Date() > user.resetTokenExpiry) {
      return NextResponse.json({ message: 'Reset token has expired' }, { status: 400 });
    }


    await Admin.findOneAndUpdate(
      { _id: String(id) },
      {
        password: password, 
        resetToken: null,
        resetTokenExpiry: null,
      },
      { new: true }
    ).exec();
    return NextResponse.json({ message: 'Password reset successfully' }, { status: 200 });
  } catch (error) {
    console.error('Password reset error: ', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
