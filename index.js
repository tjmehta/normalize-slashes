var path = require('path')

var assertArgs = require('assert-args')
var defaults=  require('101/defaults')

var pathJoin = path.join
var pathNorm = path.normalize

module.exports = normalize

function normalize (path, opts) {
  var args = assertArgs(arguments, {
    'path': 'string',
    '[opts]': 'object'
  })
  defaults(args, { opts: {} })
  defaults(args.opts, { start: false, end: false })
  path = args.path
  opts = args.opts
  var out = pathJoin('/', pathNorm(path), '/')
  if (out === '/') {
    return (opts.start || opts.end)
      ? '/'
      : ''
  }
  var startIndex = opts.start ? 0 : 1
  var endIndex = opts.end ? out.length : -1
  return out.slice(startIndex, endIndex)
}