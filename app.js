const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/", cors(), (req, res) => {

})

app.post("/", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await collection.findOne({ email: email , password:password })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (error) {
        res.json("notexist")
        console.log(e);
    }
})

// --------------------------------------------------------------------- for signup
// --------------------------------------------------------------------- for signup

app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch (error) {
        res.json("notexist")
        console.log(e);
    }
})

let port = 3333
app.listen(port,()=>{
    console.log(`port is now connected on port no.${port}`); 
})