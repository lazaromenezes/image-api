const PNGImage = require('../pngImage')
const PNGResponse = require('./pngResponse')

class TextPlugin{

  constructor(){
    this.route = 'text'
  }

  onGet(req, res) {
    let fontSize = req.query.fontSize || 42
    let options = {
      font: `${fontSize}px sans-serif`,
      paddingLeft: req.query.left || 15,
      paddingTop: req.query.top || 15
    }

    let image = new PNGImage(options).render(req.query.text)
    PNGResponse.send(res, image)
  }
}

module.exports = new TextPlugin()
