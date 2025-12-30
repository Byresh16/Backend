require('dotenv').config
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hi', (req,res)=>{
    res.send("My name is Byresh")
})

app.get('/login', (req, res)=>{
    res.send('<h1 style = "text-align: center"> Please Login to move on!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
