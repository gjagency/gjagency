import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

import { query } from "../../lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, message } = body;

    // Validación básica
    if (!name || !email || !service || !budget || !timeline || !message) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben estar completos" },
        { status: 400 },
      );
    }

    // Guardar en base de datos
    const result = await query(
      `INSERT INTO contact_submissions (name, email, phone, service, budget, timeline, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id`,
      [name, email, phone || null, service, budget, timeline, message],
    );

    const submissionId = result.rows[0].id;

    // Configurar nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // App Password de Gmail
      },
    });

    // Contenido del email
    const emailContent = `
      <h2>Nueva Solicitud de Contacto - G&J Agency</h2>
      <p><strong>ID:</strong> ${submissionId}</p>
      <hr />
      
      <h3>Datos del Cliente:</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
      
      <h3>Detalles del Proyecto:</h3>
      <p><strong>Servicio:</strong> ${service}</p>
      <p><strong>Presupuesto:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      
      <h3>Mensaje:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr />
      <p><small>Recibido: ${new Date().toLocaleString("es-AR")}</small></p>
    `;

    // Enviar email a los 3 destinatarios
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [
        "gjagencysoftware@gmail.com",
        "phjocoronel@gmail.com",
        "gscatena@gmail.com",
      ],
      subject: `🚀 Nueva Consulta: ${service} - ${name}`,
      html: emailContent,
    });

    // Email de confirmación al cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recibimos tu consulta - G&J Agency",
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${name},</p>
        <p>Recibimos tu consulta sobre <strong>${service}</strong> y te responderemos en menos de 24 horas.</p>
        <p>Mientras tanto, si tenés alguna pregunta urgente podés escribirnos directamente a gjagencysoftware@gmail.com</p>
        <br>
        <p>Saludos,</p>
        <p><strong>Equipo G&J Agency</strong></p>
      `,
    });

    return NextResponse.json({
      success: true,
      id: submissionId,
      message: "Consulta enviada exitosamente",
    });
  } catch (error) {
    console.error("Error procesando contacto:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 },
    );
  }
}
