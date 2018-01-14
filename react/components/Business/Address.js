import React from "react";


export default class Address extends React.Component {
  handleAddressChange(e) {
    const address = e.target.value;
    this.props.changeAddress(address);
  }
  
  render() {
    return (
      <div>
        <input type="text" class="phone" value={this.props.address} onChange={this.handleAddressChange.bind(this)} />
      </div>
    );
  }
}