import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data)
        const client = await MongoClient.connect("mongodb://localhost:27017/meetups");
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data)
        console.log(result)
        client.close();
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler