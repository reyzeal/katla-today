const express = require("express")
const mustacheExpress = require('mustache-express');
const engine = require("./engine")
const app = express()

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');


app.get("/", async (req,res) => {
    let data = await engine()
    let payload = {}
    for(let i=1;i<=5;i++){
        payload["data"+i] = data[i-1]
    }
    res.render("index", payload)
})

app.listen(3000, "0.0.0.0", () => {})