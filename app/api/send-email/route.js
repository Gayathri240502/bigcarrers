import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, projectType, mobile, message } = await req.json();

    const toAddress = process.env.EMAIL_TO;
    const fromAddress = process.env.EMAIL_USER;

    if (!toAddress || !fromAddress) {
      throw new Error("Missing EMAIL_TO or EMAIL_USER in environment.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromAddress,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${fromAddress}>`,
      to: toAddress,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
