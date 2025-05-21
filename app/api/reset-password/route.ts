
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { resetEmail } from '@/lib/resetEmail';
import Admin from '@/lib/database/admin.modal';
import { connectToDatabase } from '@/lib/database';
import { sendPasswordResetEmail } from '@/lib/mailgun';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
      await connectToDatabase();
    const user = await Admin.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1-hour expiration

    // Update the user's reset token and expiry
    
    await Admin
      .findOneAndUpdate(
        { email: email },
        {
          resetToken: resetToken,
          resetTokenExpiry: resetTokenExpiry,
        },
        { new: true }
      )
      .exec();
      const userId = user._id.toString();
    // Generate the password reset link (fallback link)
    const resetLink = `${process.env.APP_URL}/reset-password/${userId}?token=${resetToken}`;

    await sendPasswordResetEmail(email, resetLink);

    return NextResponse.json({ message: 'Reset email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending reset email:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
