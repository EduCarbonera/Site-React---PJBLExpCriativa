const express = require('express')
const cors = require('cors')
const vegetaisRoutes = require('./routes/vegetaisRoutes')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/vegetais', vegetaisRoutes)

app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001')
})