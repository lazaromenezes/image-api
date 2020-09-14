const textToSVG = require('text-to-svg').loadSync()

class SVGImage{
  
  constructor(options){
    this.options = options || {
      fontSize: 50,
      leftMargin: 10,
      topMargin: 10
    }
  }

}

SVGImage.prototype.render = function(text){

  const attributes = {
    stroke: '#EEEEEE', 
    fill: '#EEEEEE', 
  }

  this.options = Object.assign(this.options, {
    x: this.options.leftMargin, 
    y: this.options.topMargin * 0.75,
    anchor: 'left top'
  })

  this.options.attributes = attributes

  const metrics = textToSVG.getMetrics(text, this.options);

  let width = metrics.width + this.options.leftMargin * 2
  let height = metrics.height + this.options.topMargin * 2

  let image = `<svg width="${width}" height="${height}">`
  image += `
    <defs>
      <linearGradient id="sky" x1="0%" y1="0%" x2="0" y2="100%">
        <stop offset="0%" style="stop-color:#6078EA;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#17EAD9;stop-opacity:1" />
      </linearGradient>
    </defs>`

  image += `<rect width="${width}" height="${height}" fill="url(#sky)"></rect>`

  image += textToSVG.getPath(text, this.options)

  image += '</svg>'

  return image

}

module.exports = SVGImage
