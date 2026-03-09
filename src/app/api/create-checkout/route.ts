import { NextResponse } from "next/server";

export async function POST() {
  // TODO: Replace with real Stripe Checkout session creation
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // const session = await stripe.checkout.sessions.create({...});
  // return NextResponse.json({ url: session.url });

  console.log("[MOCK] Stripe checkout session created");

  return NextResponse.json({
    url: "/confirmation",
    message: "Mode test, redirection simulée",
  });
}
