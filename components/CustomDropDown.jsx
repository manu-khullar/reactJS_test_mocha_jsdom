import React from 'react';
import ReactDOM from 'react-dom';

class CustomDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: "Manu" };
    this.changeSelectedItem = this.changeSelectedItem.bind(this);
  }

  changeSelectedItem(event) {
    this.setState({ selectedItem: event.target.value });
  }

  ListItems(name, value) {
    return (<option key={value} value={value}>{name}</option>);
  }

  render() {
    return (<select value={this.state.selectedItem}
                    onChange={this.changeSelectedItem}>
              {this.ListItems("Manu", "Manu")}
              {this.ListItems("Arun", "Arun")}
              {this.ListItems("Gautam", "Gautam")}
              {this.ListItems("Shubham", "Shubham")}
              {this.ListItems("Ritesh", "Ritesh")}
              {this.ListItems("Priyanka", "Priyanka")}
            </select>);
  }
}

export default CustomDropDown;