const MongoClient = require('mongodb').MongoClient
const express = require('express')

const app = express()

const url = 'mongodb+srv://61160017:123456@cluster0.qedpt.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true })

async function connect(){
    await client.connect()
}

connect()

app.get('/data', async (req, res)) => {
    try {
        const callLetters = req.query.callLetters

        
      

        const db = client.db('sample_weatherdata')

        const collection = db.collection('data')

        const query = {callLetters: callLetters}
        await cursor = collection
        const air = await collection.find(query)
        // console.log(air)

    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    }
}
