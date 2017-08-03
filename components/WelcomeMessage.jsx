import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.initialName };

    this.welcomeText = this.welcomeText.bind(this);
  }

  welcomeText() {
    return (<p>Hello, {this.state.name}!</p>);
  }

  render() {
    return (<div className="welcome">
              {this.welcomeText()}
            </div>);
  }
}

WelcomeMessage.defaultProps = { initialName: "World" };

export default WelcomeMessage;