// server/index.ts
import express from 'express';
import cors from 'cors';
import { initDatabase } from './init-db';
import { connectToDatabase } from './mongo';

const app = express();
const PORT = 4000;

app.use(cors());

// Inicializar DB con datos mock
initDatabase();

app.get('/api/zones', async (_req, res) => {
  const db = await connectToDatabase();
  const zones = await db.collection('zones').find().toArray();
  res.json(zones);
});

app.get('/api/cattle', async (_req, res) => {
  const db = await connectToDatabase();
  const zones = await db.collection('cattle').find().toArray();
  res.json(zones);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
