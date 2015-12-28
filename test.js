'use strict';

require('mocha');
var assert = require('assert');
var hasProp = require('./');

describe('hasProp', function() {
  it('should return false when an object is not passed', function() {
    assert(!hasProp());
    assert(!hasProp('foo'));
  });

  it('should return true when object has property', function() {
    assert(hasProp({foo: ''}, 'foo'));
  });

  it('should return false when object does not have property', function() {
    assert(!hasProp({foo: ''}, 'bar'));
  });

  it('should return true when object has nested property', function() {
    assert(hasProp({foo: {bar: ''}}, 'foo.bar'));
  });

  it('should return false when object does not have nested property', function() {
    assert(!hasProp({foo: ''}, 'foo.bar'));
  });

  it('should support passing the key as an array', function() {
    assert(hasProp({foo: {bar: ''}}, ['foo', 'bar']));
    assert(!hasProp({foo: {bar: ''}}, ['foo', 'baz']));
  });

  it('should support passing the key as a list', function() {
    assert(hasProp({foo: {bar: ''}}, 'foo', 'bar'));
    assert(!hasProp({foo: {bar: ''}}, 'foo', 'baz'));
  });
});
