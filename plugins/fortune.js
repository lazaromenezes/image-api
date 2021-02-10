const SVGImage = require('../svgImage')
const SVGResponse = require('./svgResponse')
const fetch = require('node-fetch')

class FortunePlugin{

  constructor(){
    this.route = 'fortune'
  }

  onGet(req, res) {
    let options = {
      fontSize: req.query.fontSize || 30,
      leftMargin: req.query.left || 15,
      topMargin: req.query.top || 15,
      background: "white",
      textColor: "#444444"
    }

    fetch('http://fortune-api.lazarodm.com.br/fortune')
    .then(res => res.text())
    .then(body => {
      let image = new PNGImage(options).render(body)
      SVGResponse.send(res, image)
    })
  }
}

module.exports = new FortunePlugin()
