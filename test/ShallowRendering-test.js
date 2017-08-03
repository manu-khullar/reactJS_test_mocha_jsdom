/*
Shallow rendering approach is the newest API for testing structure provided by React.js itself. 
It has really nice properties - you can test your components in a more declarative way than with previous approaches. 
It is perfect for testing in an isolation - lower-level components cannot affect your test since they are not rendered at all.

An idea behind this approach is simple. While in other approach you make a real/virtual rendering of the component, 
here you provide a special renderer which renders only a top-level component within your render. This does not require real or virtual dom
The rest of the tree is not rendered at all - they stay as React elements. 
You have an access to properties of such elements, so you can still affect the state, making your component re-rendering itself. 
That means you can test behaviour too with this approach not just UI.

------------------
These test cases are faster to run than real dom style or virtual dom style (no dom required here)
shallow renderer as it does not support refs yet
only loads the top level element - does not render the whole tree - so perfect for specific level item testing without worrying 
about rest of the dom impacting the tests.
*/

var React = require('react');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');
import CustomList  from '../components/CustomList';
import CustomItem  from '../components/CustomItem';

describe("MK Sample List - testing with shallow rendering with no dom", () => {
  beforeEach(function() {
    this.exampleItem = [
      { id: 1, name: "Manu" },
      { id: 2, name: "Khullar" }
    ];
    //below step creates a shallow renderer	
    this.renderer = TestUtils.createRenderer();
    this.renderer.render(<CustomList initialList={this.exampleItem} />);
  });

  it("renders a list in a box with proper CSS classes and item within it", function() {
    let result = this.renderer.getRenderOutput(),
        itemOneID = `item_${this.exampleItem[0].id}`,
        itemTwoID = `item_${this.exampleItem[1].id}`;

    assert.equal(result.type,'div');
    assert.equal(result.props.className,"display-list-container");

    
  });
});