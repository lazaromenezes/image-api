const PNGImage = require('../pngImage')
const PNGResponse = require('./pngResponse')
let fetch

import('node-fetch').then( (imported) => fetch = imported)

class FortunePlugin{

  constructor(){
    this.route = 'fortune'
  }

  onGet(req, res) {
    let fontSize = req.query.fontSize || 30
    let options = {
      font: `${fontSize}px sans-serif`,
      paddingLeft: req.query.left || 10,
      paddingTop: req.query.top || 10,
      backgroundColor: "white",
      textColor: "#444444"
    }

    fetch('http://fortune-api.lazarodm.com.br/fortune')
    .then(res => res.text())
    .then(body => {
      let image = new PNGImage(options).render(body)
      PNGResponse.send(res, image)
    })
  }
}

module.exports = new FortunePlugin()
