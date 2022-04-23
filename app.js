// Usando objeto de express
const express = require('express')
// App de express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Path inicial, responderá a la url localhost:3000
app.get('/', (req, res) =>{
    res.send("Hello world with express!!")
})

// Con esto inicializamos la App
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})