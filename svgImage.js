const textToSVG = require('text-to-svg').loadSync()

class SVGImage{
  
  constructor(options){
    this.options = {
      fontSize: 42,
      leftMargin: 10,
      topMargin: 10,
      x: 10,
      textColor: "black",
      background: "white",
      anchor: 'left top'
    }

    if(options)
      this.options = Object.assign(this.options, options)

    this.options.x = this.options.leftMargin
  }
}

SVGImage.prototype.render = function(text){

  const attributes = {
    stroke: this.options.textColor,
    fill: this.options.textColor
  }

  this.options.attributes = attributes

  const metrics = textToSVG.getMetrics(text, this.options);

  let width = metrics.width + this.options.leftMargin * 2
  let height = metrics.height + this.options.topMargin * 2

  this.options.y = height * 0.5 - metrics.height * 0.5

  let image = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`

  image += `<rect width="${width}" height="${height}" fill="${this.options.background}"></rect>`

  image += textToSVG.getPath(text, this.options)

  image += '</svg>'

  return image
}

module.exports = SVGImage
