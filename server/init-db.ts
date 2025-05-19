// server/init-db.ts
import { connectToDatabase } from './mongo';
import { generateMockZones } from './mock-data';

export async function initDatabase() {
  const db = await connectToDatabase();
  const usersCollection = db.collection('zones');

  const count = await usersCollection.countDocuments();
  if (count === 0) {
    console.log('📥 Insertando datos mock en MongoDB...');
    await usersCollection.insertMany(generateMockZones());
    console.log('✅ Datos mock insertados');
  } else {
    console.log('ℹ️ Datos ya existentes, no se insertan duplicados.');
  }
}
