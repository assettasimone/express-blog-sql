//import express
const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json());
//import posts router
const postsRouter = require('./routers/posts')

app.use('/api/posts', postsRouter)




//index
app.get('/', (req, res) => {
    res.send('server online')
})



app.listen(PORT, () => {
    console.log(`Blog server listen at: http://localhost:${PORT}`)
})