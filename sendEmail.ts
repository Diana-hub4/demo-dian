import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otro servicio como SendGrid, Mailgun, etc.
  auth: {
    user: 'tucorreo@gmail.com', // Tu correo
    pass: 'tucontraseña', // Tu contraseña o contraseña de aplicación
  },
});

export const sendPasswordResetEmail = (email: string, temporaryPassword: string) => {
  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: email,
    subject: 'Restablecimiento de contraseña',
    text: `Tu contraseña temporal es: ${temporaryPassword}. Úsala para iniciar sesión y cambia tu contraseña inmediatamente.`,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};