import express, { Request, Response } from 'express';
import cors from 'cors';
import { json } from 'express';
import { createServer } from 'http';
import { router as apiRouter } from './routes/api';
import { attachWebSocketServer } from './ws';

const app = express();
app.use(cors());
app.use(json());

app.get('/health', (_req: Request, res: Response) => {
	res.json({ ok: true });
});

app.use('/api', apiRouter);

const httpServer = createServer(app);
attachWebSocketServer(httpServer);
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
	console.log(`API server listening on http://localhost:${PORT}`);
});