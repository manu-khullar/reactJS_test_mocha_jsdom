// Mocking window and document object using the constructor:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing my mkdiv', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: This is just a test from manu!', function() {
    var MKdiv = require('../components/basiccomponent.jsx');

    var myDiv = TestUtils.renderIntoDocument(
      <MKdiv />
    );

    var divText = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'span');

    assert.equal(divText.textContent, 'This is just a test from manu!');
  });
});