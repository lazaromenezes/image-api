const SVGImage = require('../svgImage')
const SVGResponse = require('./svgResponse')

class TextPlugin{

  constructor(){
    this.route = 'text'
  }

  onGet(req, res) {
    let options = {
      fontSize: req.query.fontSize || 42,
      leftMargin: req.query.left || 15,
      topMargin: req.query.top || 15
    }

    let image = new SVGImage(options).render(req.query.text)
    SVGResponse.send(res, image)
  }
}

module.exports = new TextPlugin()
