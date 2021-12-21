import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL!);

export async function connect() {
  try {
    await client.connect();

    const db = client.db('test');
    return { db, client };
  } finally {
    console.log('conectado mané');
  }
}
