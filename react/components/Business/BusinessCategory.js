import React from "react";


export default class BusinessCategory extends React.Component {
  handleChange(e) {
    const businessCategory = e.target.value;
    this.props.changeBusinessCategory(businessCategory);
  }
  
  render() {
    return (
      <div>
        <select class="" onChange={this.handleChange.bind(this)}>
			<option selected>{this.props.businessCategory}</option>
			<option>Electronics & Appliance</option>
            <option>Sport</option>
            <option>Fashion</option>
            <option>Food & Beverage</option>
            <option>Automotive</option>
            <option>Home Appliance</option>
            <option>Furniture</option>
		</select>
      </div>
    );
  }
}
