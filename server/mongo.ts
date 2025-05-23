// server/mongo.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://mongo:27017';
const client = new MongoClient(uri);

let db: Db;

export async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db('livestock-management'); 
      console.log('✅ Conectado a MongoDB');
    } catch (error) {
      console.error('❌ Error conectando a MongoDB:', error);
      throw error;
    }
  }

  return db;
}
