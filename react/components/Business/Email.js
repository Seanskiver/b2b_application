import React from "react";


export default class Email extends React.Component {
  handleEmailChange(e) {
    const email = e.target.value;
    this.props.changeEmail(email);
  }
  
  render() {
    return (
      <div>
        <input type="text" class="phone" value={this.props.email} onChange={this.handleEmailChange.bind(this)} />
      </div>
    );
  }
}
