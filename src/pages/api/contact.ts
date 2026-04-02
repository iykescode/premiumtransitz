import SendEmail from "@/pages/components/SendEmail";
import ContactFormTemplate from "@/pages/email/ContactFormTemplate";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const body = req.body;

        const result = await SendEmail({
            from: "noreply@premiumtransitz.com",
            to: "oluwoleayoola02@gmail.com",
            subject: "New Ride Alert!",
            html: ContactFormTemplate({
                start: body.start,
                destination: body.destination,
                dateFrom: body.dateFrom,
                dateTo: body.dateTo,
                vehicle: body.vehicleBrand,
                name: body.name,
                phone: body.phone,
                email: body.email,
                trip: body.trip
            })
        });

        return res.status(200).json({ success: true, result});
    } catch (error: any) {
        return res.status(500).json({ success: false, error: error.message });
    }
}