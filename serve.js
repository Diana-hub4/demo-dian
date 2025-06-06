const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otro servicio como SendGrid, Mailgun, etc.
  auth: {
    user: 'tuemail@gmail.com', // Cambia esto por tu correo
    pass: 'tucontraseña', // Cambia esto por tu contraseña
  },
});

app.post('/send-email', (req, res) => {
  const { email, nombre, enlaceRecuperacion } = req.body;

  const mailOptions = {
    from: '[TuEmpresa] no-reply@tuempresa.com',
    to: email,
    subject: '🔐 Recuperación de Contraseña',
    html: `
      <p>Hola, ${nombre} 👋</p>
      <p>Recibimos una solicitud para restablecer tu contraseña. Para continuar con el proceso, haz clic en el siguiente enlace:</p>
      <p>🔗 <a href="${enlaceRecuperacion}">Restablecer contraseña</a></p>
      <p>Si no solicitaste este cambio, puedes ignorar este mensaje. Por seguridad, este enlace expirará en 30 minutos.</p>
      <p>Si necesitas ayuda, contáctanos en soporte@tuempresa.com.</p>
      <p>Saludos,</p>
      <p>El equipo de [TuEmpresa]</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});