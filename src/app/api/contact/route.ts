import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  title: string;
  message: string;
}

interface ResendEmailSendParams {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, title, message }: ContactRequestBody =
      await req.json();

    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["kudaesithu2@gmail.com"],
      subject: title,
      html: `
                <h3>New message from your portfolio site</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
    } as ResendEmailSendParams);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
