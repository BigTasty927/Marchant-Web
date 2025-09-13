import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { marketData } from '../services/marketData';
import { portfolioStore } from '../services/portfolioStore';

export const router = Router();

router.get('/symbols', (_req: Request, res: Response) => {
	res.json(marketData.getSymbols());
});

router.get('/quote/:symbol', (req: Request, res: Response) => {
	const symbol = req.params.symbol.toUpperCase();
	const quote = marketData.getQuote(symbol);
	if (!quote) {
		return res.status(404).json({ error: 'Symbol not found' });
	}
	res.json(quote);
});

router.get('/portfolio', (_req: Request, res: Response) => {
	res.json(portfolioStore.getSnapshot());
});

const OrderSchema = z.object({
	side: z.enum(['BUY', 'SELL']),
	symbol: z.string().toUpperCase(),
	quantity: z.number().int().positive(),
	price: z.number().positive().optional(),
	type: z.enum(['MARKET', 'LIMIT']).default('MARKET'),
});

type OrderInput = z.infer<typeof OrderSchema>;

router.post('/orders', (req: Request, res: Response) => {
	const parseResult = OrderSchema.safeParse(req.body);
	if (!parseResult.success) {
		return res.status(400).json({ error: 'Invalid order', details: parseResult.error.issues });
	}
	const order: OrderInput = parseResult.data;
	const orderId = uuidv4();
	const execution = portfolioStore.executeOrder({ id: orderId, ...order });
	res.status(201).json(execution);
});