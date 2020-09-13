class TextPlugin{

  constructor(){
    this.route = 'text'
  }

  onGet(req, res) {
    res.send(req.query.text)
  }
}

module.exports = new TextPlugin()
