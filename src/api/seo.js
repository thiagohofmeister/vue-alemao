const canonical = function (str) {
  const urlSegments = window.location.href.split('://')
  const protocol = urlSegments[0]

  let url = urlSegments[1]
  if (url.indexOf('/') !== -1) {
    url = url.split('/')[0]
  }

  let canonicalStr = protocol + '://' + url
  if (str) {
    canonicalStr += str
  }

  return canonicalStr
}

export default {
  '/': {
    title: 'Alemão Aula para Habilitados - Perca o medo de dirigir',
    description: 'O Alemão também dá aula para condutores habilitados, agora você pode perder aquele medo de dirigir no trânsito da cidade grande, marque sua aula agora',
    canonical: canonical('/'),
    openGraph: canonical('/logotipo.png')
  }
}
