import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, companyName, emailAddress, phoneNumber, inquiry } = data || {};

    if (!fullName || !emailAddress) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (process.env.SMTP_SECURE ?? 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.INQUIRY_RECIPIENT || process.env.SMTP_USER;

    const subject = `Website inquiry from ${fullName}`;
    const text = `Name: ${fullName}\nCompany: ${companyName || '-'}\nEmail: ${emailAddress}\nPhone: ${phoneNumber || '-'}\n\nMessage:\n${inquiry || ''}`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Failed to send inquiry email', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
