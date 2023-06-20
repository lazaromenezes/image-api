import express from 'express'
import plugins from './plugins.json' assert { type: "json" }

const port = process.env.PORT || 80
const prefix = '/image'

var app = express()

plugins.plugins.forEach(pluginName => {
  import(`./plugins/${pluginName}.js`).then((plugin) => {
    app.get(`${prefix}/${plugin.default.route}`, plugin.default.onGet)
  })
})

app.get(prefix, (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
