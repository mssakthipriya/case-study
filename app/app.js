const express = require ('express')
const app = express()

app.get('/', (req, res)=> res.send('Hello Yarowa AG!'))

app.listen(5000, ()=> console.log('Server up and Running!'))
