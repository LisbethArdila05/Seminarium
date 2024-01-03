import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import user from "./routes/User-routes.js"; 
import planta from "./routes/plant.routes.js"

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8100',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }))

const PORT = process.env.PORT || 3000;

app.use('/usuario', user)
app.use('/planta', planta)
app.use(bodyParser.json())

//si no encuentra una ruta o si la ruta en si no existe 
app.use((req, res, next) => {
    res.status(404).json({message:'Not Found endpoint'})
})
app.listen(PORT, () => {
    console.log(`puerto ${PORT}`)
})