import PNGImage from '../pngImage.js'
import PNGResponse from './pngResponse.js'

class TextPlugin{

  constructor(){
    this.route = 'text'
  }

  onGet(req, res){
    let fontSize = req.query.fontSize || 42
    let options = {
      font: `${fontSize}px sans-serif`,
      paddingLeft: req.query.left || 15,
      paddingTop: req.query.top || 15
    }

    let image = new PNGImage(options).render(req.query.text)
    new PNGResponse().send(res, image)
  }
}

export default new TextPlugin()
