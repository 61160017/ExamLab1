const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://61160017:123456@cluster0.qedpt.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(url)

function run() {
    try {

        await client.connect()

        const db = client.db('sample_weatherdata')

        const collection = db.collection('data')

        const query = { type: "FM-13" }
        const air = await collection.findOne(query)
        // console.log(air)
        await cursor.forEach(console.dir)

    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    }
}
