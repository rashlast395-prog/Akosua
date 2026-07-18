import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRouter from './routes/contact.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));
app.use('/api', contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
