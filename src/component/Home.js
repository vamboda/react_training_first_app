import React, { Component } from "react";
import Header from "./Header";
import NewsDisplay from "./NewsDisplay";
import JSON from "../db.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      news: JSON,
      title: "News Title",
      filtered: JSON
    };
  }

  filterNew(keyword) {
    const output = this.state.news.filter(
      newsItem => newsItem.title.toLowerCase().indexOf(keyword.toLowerCase()) != -1
    );
    this.setState({
      filtered: output
    });
  }

  render() {
    console.log(this.state.news);
    return (
      <React.Fragment>
        <Header  onSearch={this.filterNew.bind(this)}/>
        <hr />
        <NewsDisplay
          dataList={this.state.filtered}
          dataTitle={this.state.title}
        />
      </React.Fragment>
    );
  }
}

export default Home;
