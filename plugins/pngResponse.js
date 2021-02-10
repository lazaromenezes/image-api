class PNGResponse {
  send(res, pngImage){
    res.setHeader('content-type', 'image/png')
    res.setHeader('cache-control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
    res.send(pngImage)
  }
}

module.exports = new PNGResponse()
