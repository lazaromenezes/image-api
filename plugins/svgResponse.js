class SVGResponse {

  send(res, svgImage){
    res.setHeader('content-type', 'image/svg+xml')
    res.setHeader('cache-control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
    res.send(svgImage)
  }
}

module.exports = new SVGResponse()
