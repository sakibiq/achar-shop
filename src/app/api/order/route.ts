import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ORDER_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || "sakibiq001@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const order = await req.json();

    if (!order.fullName || !order.phone || !order.items?.length) {
      return NextResponse.json({ error: "Invalid order data." }, { status: 400 });
    }

    const productLines = order.items
      .map((item: { name: string; quantity: number; price: number; lineTotal: number }) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e8f0ef;">${item.name}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e8f0ef;text-align:center;">${item.quantity}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e8f0ef;text-align:right;">৳${item.price}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e8f0ef;text-align:right;font-weight:600;">৳${item.lineTotal}</td>
        </tr>`)
      .join("");

    const emailHtml = `
<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#fff3e6;font-family:'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:30px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,70,67,0.12);">
    <div style="background:#004643;padding:28px 32px;text-align:center;">
      <h1 style="margin:0;color:#fff3e6;font-size:24px;">🛒 New Order Received!</h1>
      <p style="margin:6px 0 0;color:rgba(255,243,230,0.7);font-size:14px;">আচার ঘর — ${order.orderDate}</p>
    </div>
    <div style="padding:28px 32px;">
      <h2 style="margin:0 0 16px;color:#004643;font-size:18px;border-bottom:2px solid #004643;padding-bottom:8px;">👤 Customer Details</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;width:140px;">Full Name</td><td style="padding:6px 0;color:#001a18;font-weight:600;font-size:14px;">${order.fullName}</td></tr>
        <tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${order.phone}" style="color:#004643;font-weight:600;text-decoration:none;">${order.phone}</a></td></tr>
        <tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;vertical-align:top;">Address</td><td style="padding:6px 0;color:#001a18;font-size:14px;">${order.address}</td></tr>
        <tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;">Area / District</td><td style="padding:6px 0;color:#001a18;font-size:14px;">${order.area}</td></tr>
        ${order.deliveryNote ? `<tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;">Delivery Note</td><td style="padding:6px 0;color:#001a18;font-size:14px;font-style:italic;">${order.deliveryNote}</td></tr>` : ""}
        <tr><td style="padding:6px 0;color:#6b9e9b;font-size:14px;">Payment</td><td style="padding:6px 0;"><span style="background:#e6f2f1;color:#004643;font-weight:700;padding:3px 10px;border-radius:20px;font-size:13px;">${order.paymentMethod}</span></td></tr>
      </table>
    </div>
    <div style="padding:0 32px 28px;">
      <h2 style="margin:0 0 16px;color:#004643;font-size:18px;border-bottom:2px solid #004643;padding-bottom:8px;">🛍️ Order Items</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <thead><tr style="background:#e6f2f1;">
          <th style="padding:10px 12px;text-align:left;color:#2d5a57;font-size:12px;text-transform:uppercase;">Product</th>
          <th style="padding:10px 12px;text-align:center;color:#2d5a57;font-size:12px;text-transform:uppercase;">Qty</th>
          <th style="padding:10px 12px;text-align:right;color:#2d5a57;font-size:12px;text-transform:uppercase;">Price</th>
          <th style="padding:10px 12px;text-align:right;color:#2d5a57;font-size:12px;text-transform:uppercase;">Total</th>
        </tr></thead>
        <tbody>${productLines}</tbody>
      </table>
      <div style="margin-top:16px;background:#e6f2f1;border-radius:12px;padding:16px 20px;">
        <div style="display:flex;justify-content:space-between;color:#2d5a57;font-size:14px;margin-bottom:6px;"><span>Subtotal</span><span>৳${order.subtotal}</span></div>
        <div style="display:flex;justify-content:space-between;color:#2d5a57;font-size:14px;margin-bottom:10px;"><span>Delivery</span><span>৳${order.deliveryCharge}</span></div>
        <div style="display:flex;justify-content:space-between;color:#004643;font-size:18px;font-weight:700;border-top:2px solid #b3d9d6;padding-top:10px;"><span>Grand Total</span><span>৳${order.total}</span></div>
      </div>
    </div>
    <div style="background:#004643;padding:20px 32px;text-align:center;">
      <p style="margin:0;color:rgba(255,243,230,0.7);font-size:13px;">আচার ঘর — Cox's Bazar, Bangladesh</p>
    </div>
  </div>
</body></html>`;

    const { error } = await resend.emails.send({
      from: "orders@resend.dev",
      to: ORDER_EMAIL,
      subject: `🛒 New Order from ${order.fullName} — ৳${order.total}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send order email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
