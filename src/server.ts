import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

const app = express();

function logRequest(request: Request, response: Response, next: NextFunction) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

app.use(express.json());
app.use(logRequest);
app.use(routes);

app.listen(3333, () => {
  console.log('Iniciando servidor na porta 3333 🚀');
});
