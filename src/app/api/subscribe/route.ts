import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, prenom, nom } = body;

  if (!email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    // Fallback: log en dev si pas de clé API
    console.log(`[DEV] Subscriber: ${prenom} ${nom} <${email}>`);
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom, NOM: nom },
        listIds: [parseInt(process.env.BREVO_LIST_ID || "2", 10)],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("[Brevo] Error:", err);
      // duplicate_parameter = contact already exists, treat as success
      if (err.code === "duplicate_parameter") {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json(
        { error: "Erreur lors de l'inscription" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Brevo] Network error:", error);
    return NextResponse.json(
      { error: "Erreur réseau" },
      { status: 500 }
    );
  }
}
