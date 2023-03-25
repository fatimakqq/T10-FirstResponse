import { MongoClient } from 'mongodb'

async function connectToDatabase() {
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(process.env.MONGO_DB);
    const collection = db.collection('emergencies');
    return collection;
  }

export default async function handler(req, res) {
    const collection = await connectToDatabase();
    const data = await collection.find().toArray();
    res.status(200).json(data);
  }
