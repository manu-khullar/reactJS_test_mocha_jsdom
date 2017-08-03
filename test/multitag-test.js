/*
This test is the first test which integrates with our peoplefinder react app specifically with About the app page.  its really a basic test
Note how it searches for the same tag and verify the multiple dom elements for content
*/

var React = require('react');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');
import AboutTheApp from '../components/AboutTheApp.Component'

describe('MK-Multitag test', function() {
    it('try to find element array with same tags', function(done) {
    
    var renderedTree = TestUtils.renderIntoDocument(<AboutTheApp />);
    var renderedMyComponentPara = TestUtils.scryRenderedDOMComponentsWithTag(renderedTree, 'li');
    

    assert.equal(renderedMyComponentPara[0].textContent, 'Org Chart on iOS and Android');
    assert.equal(renderedMyComponentPara[1].textContent, 'Admin now shows on details for iOS and Android');
    assert.equal(renderedMyComponentPara[2].textContent, 'Added making virtual locations not clickable on Android and iOS');
    assert.equal(renderedMyComponentPara[3].textContent, 'Feedback now has proper content in email');
    assert.equal(renderedMyComponentPara[4].textContent, 'Added call prompt on iOS');
    assert.equal(renderedMyComponentPara[5].textContent, 'Handled offboarded employees');
    assert.equal(renderedMyComponentPara[6].textContent, 'Updated to read new about and terms APIs');
    assert.equal(renderedMyComponentPara[7].textContent, 'Added client integration into Google Analytics');
    assert.equal(renderedMyComponentPara[8].textContent, 'Fixed orientation issue for full screen image on Android');
    assert.equal(renderedMyComponentPara[9].textContent, 'Fine tuned swipe animations on Android for recently viewed');
    assert.equal(renderedMyComponentPara[10].textContent, 'Fixed bug with getting stuck when adding contact on iOS');
    assert.equal(renderedMyComponentPara[11].textContent, 'Fixed logout bug on Android');

    done();
})});