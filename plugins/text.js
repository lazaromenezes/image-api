const textToSVG = require('text-to-svg').loadSync();

class TextPlugin{

  constructor(){
    this.route = 'text'
  }

  onGet(req, res) {
  	const attributes = {fill: 'red', stroke: 'black'};
		const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
 
		const svg = textToSVG.getSVG(req.query.text, options);

		res.send(svg)
  }
}

module.exports = new TextPlugin()
