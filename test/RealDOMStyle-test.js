/*
General :
This approach does not use a virtual dom it uses a real rendered dom.
TestUtils.renderIntoDocument is used to render a component in a real, but detached element of the DOM
This is more towards acceptance test cases since we cannot test a discrete element here independent of others

Pros:
-Your test can survive even switches of tools with small modifications. Everything that renders a real DOM can be tested that way - not only React. Assertions will stay the same.
-This is the most 'direct’ way to test an outcome. You don’t even need to trust React that it makes its job to render the DOM.
-There are variety of tools that can help you with querying the DOM like jQuery.

Cons:
-You must have an environment which supports writing to DOM. It can be a virtual one (jsdom) or a 'real’ one (like PhantomJS or a real browser driver). It can slow down your tests.
-Testing 'reactish’ things like props is harder with this approach if they’re not placed at the component you are testing.
-You have to test in terms of the DOM elements. You can’t test a created component tree this way.
-It is a bit verbose. While your component is defined declaratively, here you have to query the DOM result in an imperative way.
-Testing behaviour through setting state and calling properties can be hard with this approach.

*/

import WelcomeMessage from '../components/WelcomeMessage';
var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var assert = require('assert');

describe("WelcomeMessage component - the static output approach with Real DOM and Jquery selector", () => {
  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(<WelcomeMessage initialName="my first test" />);
    this.renderedDOM = () => ReactDom.findDOMNode(this.component);
  });

  it("renders a paragraph which welcome someone", function() {
    let renderedParagraphs = this.renderedDOM().querySelectorAll("p");

    assert.equal(this.renderedDOM().children.length,1);
    assert.equal(renderedParagraphs.length,1);
    assert.equal(renderedParagraphs[0].textContent, "Hello, my first test!");
  });

  it("has a <div> with a proper class name", function() {
    let rootElement = this.renderedDOM();

    assert.equal(rootElement.tagName,"DIV");
    assert.equal(rootElement.classList.length,1);
    assert.equal(rootElement.classList[0],"welcome");
  });
});