"use server";

import { Resend } from "resend";
const key = process.env.NEXT_RESEND_API_KEY;
export async function serverAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // IMPORTANT: Don't hardcode the API key in production! Use env var instead.
  const resend = new Resend(key);

  try {
    const { data, error } = await resend.emails.send({
      from: "Shrinivasan T <onboarding@resend.dev>",
      to: "shrinivasanthevar@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) throw error;

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (err) {
    console.error("Email error:", err);
    return {
      success: false,
      message: "Failed to send message.",
    };
  }
}
