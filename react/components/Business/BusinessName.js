import React from "react";


export default class BusinessName extends React.Component {
  handleChange(e) {
    const businessName = e.target.value;
    this.props.changeBusinessName(businessName);
  }
  
  render() {
    return (
      <div>
        <input type="text" class="phone" value={this.props.businessName} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
