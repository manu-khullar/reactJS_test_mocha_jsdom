import React from 'react';


class CustomItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notSure: false };

    this.toggleMessageItem = this.toggleMessageAboutItem.bind(this);
    this.handleClickNotSureLink = this.handleClickNotSureLink.bind(this);
    this.listElementClasses = this.listElementClasses.bind(this);
    this.displayNotSureLink  = this.displayNotSureLink.bind(this);
  }

  listElementClasses() {
    return classNames({
      ["display-item"]: true,
      ["not-sure"]: this.state.notSure
    });
  }

  toggleMessageAboutItem() {
    this.setState({ notSure: !this.state.notSure });
  }

  handleDisplayLink(ev) {
    ev.preventDefault();
    this.toggleMessageAboutItem();
  }

  displayNotSureLink() {
    let { notSureMessage } = this.props;

    return (
      <p key='notSureBox'>
        <a ref='notSureLink' href='#' onClick={this.handleDisplayLink}>
          {notSureMessage[this.state.notSure]}
        </a>
      </p>
    );
  }

  render() {
    let { Item } = this.props;

    return (
      <li className={this.listElementClasses()}>
        <p ref='name' key='itemName'>{Item.name}</p>
        {this.displayNotSureLink()}
      </li>
    );
  }
}

CustomItem.defaultProps = {
  dispMessage: {
    true: "Now I'm sure!",
    false: "I'm not sure about this Item to display"
  }
}

export default CustomItem;