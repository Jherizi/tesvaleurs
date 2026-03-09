import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prenom, nom, email, message } = body;

  if (!email || !message) {
    return NextResponse.json({ error: "Email et message requis" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    // Dev mode: just log
    console.log(`[DEV] Contact form: ${prenom} ${nom} <${email}>`);
    console.log(`[DEV] Message: ${message}`);
    return NextResponse.json({ success: true });
  }

  try {
    // Send transactional email via Brevo
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Tes Valeurs", email: "noreply@tesvaleurs.fr" },
        to: [{ email: "jihane@herizi.com", name: "Jihane Herizi" }],
        replyTo: { email, name: `${prenom} ${nom}` },
        subject: `[Tes Valeurs] Message de ${prenom} ${nom}`,
        htmlContent: `
          <h3>Nouveau message depuis tesvaleurs.fr</h3>
          <p><strong>De :</strong> ${prenom} ${nom} (${email})</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("[Brevo] Email error:", err);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Brevo] Network error:", error);
    return NextResponse.json({ error: "Erreur réseau" }, { status: 500 });
  }
}
