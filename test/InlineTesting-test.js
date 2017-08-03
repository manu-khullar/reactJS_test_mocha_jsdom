//Really basic inline react component test

var React = require('react');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');

describe('MK-Inline', function() {
    it('try to find Tag', function(done) {
    var TestWrap = React.createClass({
        render: function () {
            return (
                        <div>
                            <p>Test this section</p>
                        </div>
                );
            }
    });

    var renderedTree = TestUtils.renderIntoDocument(<TestWrap />);
    var renderedMyComponentPara = TestUtils.findRenderedDOMComponentWithTag(renderedTree, 'p');
    assert.equal(renderedMyComponentPara.textContent, 'Test this section');
    done();
})});