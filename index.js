const express = require('express')
const port = process.env.PORT || 80
const prefix = '/image'
const plugins = require('./plugins.json')

var app = express()

plugins.plugins.forEach(pluginName => {
  let plugin = require(`./plugins/${pluginName}`)
  app.get(`${prefix}/${plugin.route}`, plugin.onGet.bind(plugin))
})

app.get(prefix, (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
