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
    fill: 'red', 
    stroke: 'black', 
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

  image += `<rect width="${width}" height="${height}" fill="blue"></rect>`

  image += textToSVG.getPath(text, this.options)

  image += '</svg>'

  return image

}

module.exports = SVGImage
