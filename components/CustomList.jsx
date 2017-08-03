import React from 'react';
import ReactDOM from 'react-dom';
import CustomItem from './CustomItem'

class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayItemList: this.props.initialList };
  }

  itemUniqueID(item) {
    return ['item', item.id].join('_');
  }

  render() {
    let displayItemList = [];
    this.state.displayItemList.forEach(Item => {
      let id = this.itemUniqueID(Item);
      displayItemList.push(<CustomItem ref={id} key={id} item={Item} />);
    });

    return (
      <div className='display-list-container'>
        <ul ref='list' className='display-list'>
          {displayItemList}
        </ul>
      </div>
    );
  }
}

export default CustomList;