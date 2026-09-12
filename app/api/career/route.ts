import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get('fullName') as string;
    const emailAddress = formData.get('emailAddress') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const cvFile = formData.get('cv') as File | null;

    if (!fullName || !emailAddress || !position || !experience) {
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

    const subject = `Career Application from ${fullName} - ${position}`;
    
    const text = `Name: ${fullName}\nEmail: ${emailAddress}\nPhone: ${phoneNumber || '-'}\nPosition Applied For: ${position}\n\nExperience & Qualifications:\n${experience}`;

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    
    if (cvFile) {
      const buffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(buffer),
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      subject,
      text,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Failed to send career application email', err);
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Server error' }, { status: 500 });
  }
}
