const express = require('express');
const app = express()
const generatorFunc = require('./generatorFun/controller').gereneratorFunc;
app.use(express.json())

app.listen(8000, () => {
    console.log("connection successfull")
})
app.get('/', async(req, res) => {
    try {
        res.send('ok').status(200)
    } catch (error) {
        console.log("error", error)
    }
})

app.post('/generatorFunc', async (req, res) => {
    try {
        console.log("req.body:", req.body);
        let { x = 6, y = 2, z = 50 } = req.body
        let response = await generatorFunc(x, y, z)
        res.send(response).status(200)  
    } catch (error) {
        console.log("error:", error)
    }})
