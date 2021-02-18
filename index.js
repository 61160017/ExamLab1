const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://61160017:123456@cluster0.qedpt.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = MongoClient(url)
