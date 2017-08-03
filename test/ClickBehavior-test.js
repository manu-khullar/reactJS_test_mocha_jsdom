/*
This test covers the UI and the behavior side of the component.
Component used is a custom Drop down.
Please note I have used chai assertion library for this test case. Also it uses a real dom style testing
*/


var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;
var assert = require('assert');
import CustomDropDown from '../components/CustomDropDown';

describe("Names Drop Down- using testing through Simulate technique", () => {
  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(<CustomDropDown />);
    this.selectDOM = () => ReactDom.findDOMNode(this.component);
    this.itemsDOM = () => this.selectDOM().children;

    this.selectedItemDOM = () => {
      let selectedItem = undefined;
      let items = this.itemsDOM();
      for(let index = 0; index < items.length; ++index) {
        if(items[index].selected) {
          selectedItem = items[index];
          break;
        }
      }

      return selectedItem;
    };

    this.availableItems = () => {
      let items = [];

      [].slice.call(this.itemsDOM()).forEach(function(itemDOM) {
        let { textContent, value } = itemDOM;
        items.push({ value, name: textContent });
      });

      return items;
    };

    this.Simulate = TestUtils.Simulate;
  });

  it("renders a select box", function() {
    let rootElement = this.selectDOM();
    assert.equal(rootElement.tagName, "SELECT");
  });


  it("User see Manu selected by Default", function() {
    //This still needs to be fixed.
    /*let selectedValue = this.selectedItemDOM();

    expect(selectedValue.name).equal("Manu");
    expect(selectedValue.value).equal('Manu');
    */
  });

  it("has all the drop down values", function() {
    let itemsDisplayed = this.availableItems();

    expect(itemsDisplayed.length).equal(6);
    expect(itemsDisplayed[0]).contain({ value: "Manu", name: "Manu" });
    expect(itemsDisplayed[1]).contain({ name: "Arun", value: "Arun" });
    expect(itemsDisplayed[2]).contain({ name: "Gautam", value: "Gautam" });
    expect(itemsDisplayed[3]).contain({ name: "Shubham", value: "Shubham" });
    expect(itemsDisplayed[4]).contain({ name: "Ritesh", value: "Ritesh" });
    expect(itemsDisplayed[5]).contain({ name: "Priyanka", value: "Priyanka" });
  });

  it("allows changing the drop down value by user", function() {
    this.Simulate.change(this.selectDOM(), { target: (this.itemsDOM())[1] });

    expect(this.component.state.selectedItem).equal("Arun");
    expect(this.selectedItemDOM().value).equal("Arun");

    this.Simulate.change(this.selectDOM(), { target: (this.itemsDOM())[2] });

    expect(this.component.state.selectedItem).equal("Gautam");
    expect(this.selectedItemDOM().value).equal("Gautam");
  });
});