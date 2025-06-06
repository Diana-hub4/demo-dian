import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response } from 'express'; // Importa Request y Response
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import { sendPasswordResetEmail } from './sendEmail';

// Crea una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta para restablecer la contraseña
app.post('/forgot-password', (req: Request, res: Response) => {
  const { email } = req.body;

  // Generar una contraseña temporal
  const temporaryPassword = '1A2V3';

  // Enviar el correo electrónico
  sendPasswordResetEmail(email, temporaryPassword);

  res.status(200).json({ message: 'Correo enviado con la contraseña temporal.' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});

// Función para configurar y exportar la aplicación Express
export function createApp(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos desde /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // Todas las rutas regulares usan el motor de Angular
  server.get('**', (req: Request, res: Response, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

// Función para iniciar el servidor
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Iniciar el servidor Node
  const server = createApp();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Ejecutar la función run
run();