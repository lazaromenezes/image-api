const express = require('express')
const app = express()
const port = 8888

app.get('/image/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
