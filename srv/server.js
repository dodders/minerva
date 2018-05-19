const express = require('express')
const fs = require('fs')

const app = express()
let rawdata = fs.readFileSync('./data/people.json')
let data = JSON.parse(rawdata)
console.log('data loaded.')

app.get('/', (req, res) => res.send(data))
app.listen(3001, () => console.log('listening on port 3001...'))


