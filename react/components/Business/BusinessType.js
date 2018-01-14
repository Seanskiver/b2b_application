import React from "react";


export default class BusinessType extends React.Component {
  handleChange(e) {
    const businessType = e.target.value;
    this.props.changeBusinessType(businessType);
  }
  
  render() {
    return (
      <div>
        <select class="" onChange={this.handleChange.bind(this)}>
		  <option selected>{this.props.businessType}</option>
		  <option>Buyer</option>
		  <option>Both</option>
		</select>
      </div>
    );
  }
}
