const MongoClient = require('mongodb').MongoClient
const express = require('express')

const app = express()

const uri = 'mongodb+srv://61160017:123456@cluster0.qedpt.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true })

async function connect(){
    await client.connect()
}

connect()

app.get('/data', async (req, res) => {
    try {
        const callLetters = req.query.callLetters

        
      

        const db = client.db('sample_weatherdata')

        const collection = db.collection('data')

        const query = {callLetters: callLetters}
        const cursor = collection.find(query).limit(10)
        let data = []
        await cursor.forEach(doc => data.push(doc.name))

        res.send(data)

    } catch(e) {
        console.error(e)
    }
})

app.listen(3000, console.log('Start application at port 3000'))
