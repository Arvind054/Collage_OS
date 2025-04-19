import nodemailer from "nodemailer";
import 'dotenv/config'


export async function POST(req) {
    require('dotenv').config()
    try {
    const { department, title, description } = await req.json();

    const departmentEmails = {
        Hostel: "Hostel@gmail.com",
        Administration: "Administration@example.com",
        Mess: "Mess@example.com",
        Warden: "Warden@example.com",
    };

    const recipientEmail = departmentEmails[department];

    if (!recipientEmail) {
      return new Response(JSON.stringify({ error: "Invalid department selected" }), { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.NodeMailerUser,
        pass: process.env.NodeMailerPass,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.NodeMailerUser, 
      to: recipientEmail, 
      subject: `New Complaint: ${title}`,
      text: `You have received a new complaint.\n\nTitle: ${title}\n\nDescription: ${description}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Complaint sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}