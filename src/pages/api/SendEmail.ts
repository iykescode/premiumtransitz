import { Resend } from "resend";

type Props = {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export default async function SendEmail({ from, to, subject, html }: Props) {
    try {
        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as string);

        const response = await resend.emails.send({
            from,
            to,
            subject,
            html,
        });

        return { success: true, response };
    } catch (error: any) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}
