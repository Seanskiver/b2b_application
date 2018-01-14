import React from "react";


export default class Phone extends React.Component {
  handlePhoneChange(e) {
    const phone = e.target.value;
    this.props.changePhone(phone);
  }
  
  render() {
    return (
      <div>
        <input type="text" class="phone" value={this.props.phone} onChange={this.handlePhoneChange.bind(this)} />
      </div>
    );
  }
}
