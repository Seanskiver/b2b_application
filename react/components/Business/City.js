import React from "react";

export default class City extends React.Component {
  handleChange(e) {
    const city = e.target.value;
    this.props.changeCity(city);
  }
  
  render() {
    return (
      <div>
        <select class="" onChange={this.handleChange.bind(this)}>
		  <option selected>{this.props.city}</option>
		  <option>Dakar</option>
		  <option>Touba</option>
		</select>
      </div>
    );
  }
}
