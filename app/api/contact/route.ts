import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    const nodemailer = (await import('nodemailer')).default;

    const transporter = nodemailer.createTransport({
      host: 'mail.spacemail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: 'info@tantricluxemallorca.com',
        pass: 'Ruka2215.'
      }
    });

    // Configurar email
    const mailOptions = {
      from: 'info@tantricluxemallorca.com',
      to: 'info@tantricluxemallorca.com',
      replyTo: email,
      subject: `Nueva Reserva - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
            🧘‍♀️ Nueva Reserva de Masaje Tantrico
          </h2>
          
          <div style="background: #f3f4f6; color: #222,padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📋 Detalles de la Reserva</h3>
            
            <p style="color: #222"><strong>👤 Nombre:</strong> ${name}</p>
            <p style="color: #222"><strong>📧 Email:</strong> ${email}</p>
            <p style="color: #222"><strong>📱 Teléfono:</strong> ${phone}</p>
            <p style="color: #222"><strong>💆‍♀️ Servicio:</strong> ${service}</p>
            <p style="color: #222"><strong>📅 Fecha:</strong> ${date}</p>
            <p style="color: #222"><strong>⏰ Hora:</strong> ${time}</p>
            
            ${message ? `<p style="color: #222"><strong>💬 Mensaje:</strong> ${message}</p>` : ''}
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #d97706;">
            <p style="margin: 0; color: #92400e;">
              <strong>⚠️ Acción requerida:</strong> Contactar al cliente para confirmar la reserva.
            </p>
          </div>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Este mensaje fue enviado desde el formulario de contacto de Tantric Luxe Mallorca.
          </p>
        </div>
      `
    };

   await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json({ 
      error: 'Error processing reservation', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}