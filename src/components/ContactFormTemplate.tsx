type Props = {
    start: string;
    destination: string;
    dateFrom: string;
    dateTo: string;
    vehicle: string;
    name: string;
    phone: string;
    email: string;
    trip: string;
};

export default function ContactFormTemplate({ start, destination, dateFrom, dateTo, vehicle, name, phone, email, trip }: Props) {
    return `
      <html lang="en">
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333;">New Ride Alert!</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 10px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Start:</strong> ${start}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Date from:</strong> ${dateFrom}</p>
            <p><strong>Date to:</strong> ${dateTo}</p>
            <p><strong>Vehicle:</strong> ${vehicle}</p>
            <p><strong>Trip:</strong> ${trip}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #999;">This message was sent from your website contact form. (Premiumtransitz)</p>
          </div>
        </body>
      </html>
  `;
}