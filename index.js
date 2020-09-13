const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const prefix = '/image'

app.get(prefix, (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
