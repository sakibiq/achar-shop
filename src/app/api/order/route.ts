// ============================================================
// ORDER API ROUTE
// This file handles sending the order notification email.
// It uses Resend (https://resend.com) to send the email.
//
// SETUP:
//  1. Go to https://resend.com and create a free account
//  2. Create an API key
//  3. Add it to your .env.local file as RESEND_API_KEY
//  4. Verify your sending domain OR use the Resend sandbox
//     for testing (you can only send to your own verified email
//     in sandbox mode).
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// This reads from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

// This is YOUR email where you receive order notifications
// Change it in .env.local — do NOT hardcode it here.
const ORDER_EMAIL = process.env.ORDER_NOTIFICATION_EMAIL || "sakibiq001@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const order = await req.json();

    // Validate minimum required fields
    if (!order.fullName || !order.phone || !order.items?.length) {
      return NextResponse.json(
        { error: "Invalid order data." },
        { status: 400 }
      );
    }

    // Build readable product list for the email
    const productLines = order.items
      .map(
        (item: { name: string; quantity: number; price: number; lineTotal: number }) =>
          `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0e8de;">${item.name}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0e8de; text-align: center;">${item.quantity}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0e8de; text-align: right;">৳${item.price}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0e8de; text-align: right; font-weight: 600;">৳${item.lineTotal}</td>
          </tr>`
      )
      .join("");

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Order - আচার ঘর</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fdf8f3; font-family: Georgia, serif;">
  <div style="max-width: 600px; margin: 30px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #f97316, #ea6010); padding: 28px 32px; text-align: center;">
      <h1 style="margin: 0; color: white; font-size: 26px; letter-spacing: 1px;">🛒 New Order Received!</h1>
      <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">আচার ঘর — ${order.orderDate}</p>
    </div>

    <!-- Customer Info -->
    <div style="padding: 28px 32px;">
      <h2 style="margin: 0 0 16px; color: #3d2810; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 8px;">
        👤 Customer Details
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px; width: 140px;">Full Name</td>
          <td style="padding: 6px 0; color: #3d2810; font-weight: 600; font-size: 14px;">${order.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px;">Phone</td>
          <td style="padding: 6px 0; color: #3d2810; font-weight: 600; font-size: 14px;">
            <a href="tel:${order.phone}" style="color: #f97316; text-decoration: none;">${order.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px; vertical-align: top;">Address</td>
          <td style="padding: 6px 0; color: #3d2810; font-size: 14px;">${order.address}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px;">Area / District</td>
          <td style="padding: 6px 0; color: #3d2810; font-size: 14px;">${order.area}</td>
        </tr>
        ${order.deliveryNote ? `
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px; vertical-align: top;">Delivery Note</td>
          <td style="padding: 6px 0; color: #3d2810; font-size: 14px; font-style: italic;">${order.deliveryNote}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 6px 0; color: #7a5126; font-size: 14px;">Payment</td>
          <td style="padding: 6px 0;">
            <span style="background: #ffecd6; color: #c24b0c; font-weight: 700; padding: 3px 10px; border-radius: 20px; font-size: 13px;">
              ${order.paymentMethod}
            </span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Order Items -->
    <div style="padding: 0 32px 28px;">
      <h2 style="margin: 0 0 16px; color: #3d2810; font-size: 18px; border-bottom: 2px solid #f97316; padding-bottom: 8px;">
        🛍️ Order Items
      </h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead>
          <tr style="background: #fff8f0;">
            <th style="padding: 10px 12px; text-align: left; color: #7a5126; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Product</th>
            <th style="padding: 10px 12px; text-align: center; color: #7a5126; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Qty</th>
            <th style="padding: 10px 12px; text-align: right; color: #7a5126; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Price</th>
            <th style="padding: 10px 12px; text-align: right; color: #7a5126; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${productLines}
        </tbody>
      </table>

      <!-- Totals -->
      <div style="margin-top: 16px; background: #fff8f0; border-radius: 12px; padding: 16px 20px;">
        <div style="display: flex; justify-content: space-between; color: #7a5126; font-size: 14px; margin-bottom: 6px;">
          <span>Subtotal</span>
          <span>৳${order.subtotal}</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: #7a5126; font-size: 14px; margin-bottom: 10px;">
          <span>Delivery Charge</span>
          <span>৳${order.deliveryCharge}</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: #3d2810; font-size: 18px; font-weight: 700; border-top: 2px solid #ffd4a8; padding-top: 10px;">
          <span>Grand Total</span>
          <span style="color: #f97316;">৳${order.total}</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #3d2810; padding: 20px 32px; text-align: center;">
      <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 13px;">
        আচার ঘর — Cox's Bazar, Bangladesh
      </p>
      <p style="margin: 6px 0 0; color: rgba(255,255,255,0.5); font-size: 12px;">
        This is an automated order notification email.
      </p>
    </div>

  </div>
</body>
</html>
    `;

    const { error } = await resend.emails.send({
      from: "orders@resend.dev",   // ← In sandbox mode use this. After domain verification, change to: orders@yourdomain.com
      to: ORDER_EMAIL,
      subject: `🛒 New Order from ${order.fullName} — ৳${order.total}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send order email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Order API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
