var describe = global.describe
var it = global.it

var expect = require('chai').expect

var normalize = require('../index.js')

describe('normalize-slashes', function () {
  it('should remove beginning and end slashes', function (done) {
    expect(normalize('hello')).to.equal('hello')
    expect(normalize('hello/')).to.equal('hello')
    expect(normalize('hello/world')).to.equal('hello/world')
    expect(normalize('hello/world/')).to.equal('hello/world')
    expect(normalize('/')).to.equal('')
    expect(normalize('/hello')).to.equal('hello')
    expect(normalize('/hello//')).to.equal('hello')
    expect(normalize('/hello//world')).to.equal('hello/world')
    expect(normalize('/hello//world//')).to.equal('hello/world')
    expect(normalize('//')).to.equal('')
    expect(normalize('//hello')).to.equal('hello')
    expect(normalize('//hello//')).to.equal('hello')
    expect(normalize('//hello//world')).to.equal('hello/world')
    expect(normalize('//hello//world//')).to.equal('hello/world')
    done()
  })

  it('should remove beginning slash only', function (done) {
    expect(normalize('hello', { end: true })).to.equal('hello/')
    expect(normalize('hello/', { end: true })).to.equal('hello/')
    expect(normalize('hello/world', { end: true })).to.equal('hello/world/')
    expect(normalize('hello/world/', { end: true })).to.equal('hello/world/')
    expect(normalize('/', { end: true })).to.equal('/')
    expect(normalize('/hello', { end: true })).to.equal('hello/')
    expect(normalize('/hello//', { end: true })).to.equal('hello/')
    expect(normalize('/hello//world', { end: true })).to.equal('hello/world/')
    expect(normalize('/hello//world//', { end: true })).to.equal('hello/world/')
    expect(normalize('//', { end: true })).to.equal('/')
    expect(normalize('//hello', { end: true })).to.equal('hello/')
    expect(normalize('//hello//', { end: true })).to.equal('hello/')
    expect(normalize('//hello//world', { end: true })).to.equal('hello/world/')
    expect(normalize('//hello//world//', { end: true })).to.equal('hello/world/')
    done()
  })

  it('should remove end slash only', function (done) {
    expect(normalize('hello', { start: true })).to.equal('/hello')
    expect(normalize('hello/', { start: true })).to.equal('/hello')
    expect(normalize('hello/world', { start: true })).to.equal('/hello/world')
    expect(normalize('hello/world/', { start: true })).to.equal('/hello/world')
    expect(normalize('/', { start: true })).to.equal('/')
    expect(normalize('/hello', { start: true })).to.equal('/hello')
    expect(normalize('/hello//', { start: true })).to.equal('/hello')
    expect(normalize('/hello//world', { start: true })).to.equal('/hello/world')
    expect(normalize('/hello//world//', { start: true })).to.equal('/hello/world')
    expect(normalize('//', { start: true })).to.equal('/')
    expect(normalize('//hello', { start: true })).to.equal('/hello')
    expect(normalize('//hello//', { start: true })).to.equal('/hello')
    expect(normalize('//hello//world', { start: true })).to.equal('/hello/world')
    expect(normalize('//hello//world//', { start: true })).to.equal('/hello/world')
    done()
  })

  it('should add beginning and end slashes', function (done) {
    expect(normalize('hello', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('hello/', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('hello/world', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('hello/world/', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('/', { start: true, end: true })).to.equal('/')
    expect(normalize('/hello', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('/hello//', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('/hello//world', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('/hello//world//', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('//', { start: true, end: true })).to.equal('/')
    expect(normalize('//hello', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('//hello//', { start: true, end: true })).to.equal('/hello/')
    expect(normalize('//hello//world', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('//hello//world//', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('./hello//world//', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('../hello//world//', { start: true, end: true })).to.equal('/hello/world/')
    expect(normalize('/hello/../world//', { start: true, end: true })).to.equal('/world/')
    done()
  })
})