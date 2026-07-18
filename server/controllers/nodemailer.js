import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});
export async function sendContact({ name, email, message }) {
  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: 'New portfolio contact',
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}
