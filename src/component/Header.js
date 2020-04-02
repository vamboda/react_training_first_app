import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Header state title",
      keyword: "Displaying all results!"
    };
  }

  inputChange(event) {
    this.setState({
      keyword: event.target.value
        ? "Displaying result for " + event.target.value
        : "Displaying all results!"
    });
    console.log("Vamshi de")
    console.log(this.props)
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <header>
        <p className="para">Header: {this.state.title}</p>
        <center>
          <input onChange={this.inputChange.bind(this)}></input>
          <select id="cars" name="cars">
            <option value="New">New</option>
            <option value="React">React</option>
          </select>
          <p>{this.state.keyword}</p>
        </center>
      </header>
    );
  }
}

export default Header;
