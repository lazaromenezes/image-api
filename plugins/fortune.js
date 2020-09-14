const SVGImage = require('../svgImage')
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

    fortuneCookies.fetchCookie()
      .then((cookie) => {
        res.setHeader('content-type', 'image/svg+xml')
        res.setHeader('cache-control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.send(new SVGImage(options).render(cookie))
      })
  }

}

module.exports = new FortunePlugin()
