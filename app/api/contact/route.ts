import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    console.log('📧 NUEVA RESERVA RECIBIDA:');
    console.log('=====================================');
    console.log(`👤 Nombre: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📱 Teléfono: ${phone}`);
    console.log(`💆‍♀️ Servicio: ${service}`);
    console.log(`📅 Fecha: ${date}`);
    console.log(`⏰ Hora: ${time}`);
    if (message) {
      console.log(`💬 Mensaje: ${message}`);
    }
    console.log('=====================================');
    console.log('📋 ACCIÓN REQUERIDA: Contactar al cliente para confirmar la reserva');
    console.log('📧 Email configurado temporalmente - DNS en proceso de configuración');
    console.log('');

    // Simular envío exitoso mientras se configuran los DNS
    // TODO: Descomentar el código de email cuando los DNS estén listos
    
    /*
    // Configurar transporter para SpaceMail
    const transporter = nodemailer.createTransporter({
      host: 'mail.spacemail.com',
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: 'info@tantricluxemallorca.com',
        pass: 'Ruka2215.'
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
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
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📋 Detalles de la Reserva</h3>
            
            <p><strong>👤 Nombre:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Teléfono:</strong> ${phone}</p>
            <p><strong>💆‍♀️ Servicio:</strong> ${service}</p>
            <p><strong>📅 Fecha:</strong> ${date}</p>
            <p><strong>⏰ Hora:</strong> ${time}</p>
            
            ${message ? `<p><strong>💬 Mensaje:</strong> ${message}</p>` : ''}
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

    // Enviar email
    await transporter.sendMail(mailOptions);
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json({ 
      error: 'Error processing reservation', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 