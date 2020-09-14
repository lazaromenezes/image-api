const SVGImage = require('../svgImage')

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

    res.send(new SVGImage(options).render(req.query.text))
  }

}

module.exports = new TextPlugin()
