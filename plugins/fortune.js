const SVGImage = require('../svgImage')
const SVGResponse = require('./svgResponse')
const fortuneCookies = require('fortune-cookies')

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

    fortuneCookies.fetchCookie().then((cookie) => {
      let image = new SVGImage(options).render(cookie)
      SVGResponse.send(res, image)
    })
  }
}

module.exports = new FortunePlugin()
