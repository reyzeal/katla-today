const express = require("express")
const mustacheExpress = require('mustache-express');
const engine = require("./engine")
const axios = require("axios") 
const app = express()

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');


app.get("/", async (req,res) => {
    let data = await engine()
    //let payload = {}
    //for(let i=1;i<=5;i++){
    //    payload["data"+i] = data[i-1]
    //}
    const payload = await axios.get(`https://katla.vercel.app/api/define/${data}`).then(r => r.data)
    res.render("index", payload.pop())
})

app.listen(process.env.port || 3000, "0.0.0.0", () => {})
