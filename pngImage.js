import text2png from 'text2png'

export default class PNGImage{
  
  constructor(options){
    this.options = {
      font: '15px sans-serif',
      padding: 10,
      margin: 10,
      textColor: "black",
      backgroundColor: "white",
    }

    if(options)
      this.options = Object.assign(this.options, options)

    this.options.x = this.options.leftMargin
  }
}

PNGImage.prototype.render = function(text){
  return text2png(text, this.options)
}

