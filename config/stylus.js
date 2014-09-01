var styl = require('stylus')
  , nib  = require('nib')

exports.compile = function compile(str, path) {
  return styl(str)
    .set('filename', path)
    .set('include css', true)
    .set('compress', true)
    .use(nib());
}
