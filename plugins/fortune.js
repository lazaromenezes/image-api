import PNGImage from '../pngImage.js'
import PNGResponse from './pngResponse.js'
import fetch from 'node-fetch'

const fortuneApi = process.env.FORTUNE_API_URL

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

    fetch(`${fortuneApi}/fortune`)
    .then(res => res.text())
    .then(body => {
      let image = new PNGImage(options).render(body)
      new PNGResponse().send(res, image)
    })
  }
}

export default new FortunePlugin()
