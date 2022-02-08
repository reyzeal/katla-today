const axios = require("axios");
module.exports = () => {
    return axios.get("https://katla.vercel.app/").then(r => {
        if(r.data){
            const raw = JSON.parse(`{${r.data.match(/"hash":"([^"]+)"/g)}}`)
            let data = raw.hash.split("")
            let t = data.pop()
            data = data.map((v,i) => {
                return String.fromCharCode(v.charCodeAt()+(i%2 === 0?-1:1))
            })
            data = data.join("")
            data += "=".repeat(parseInt(t))
            return Buffer.from(data,"base64").toString()
        }
    })
}
