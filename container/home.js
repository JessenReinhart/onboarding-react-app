import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1967171a7fb0f71db60ca6c465e05f1d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const responseData = await response.json();
    console.log(responseData);
    this.setState({
      data: responseData.results
    });
  }

  render() {
    return (
      <>
        {this.state.data.map((item, key) => (
          <div className="list">
            <h3>{item.title}</h3>
            <small className="list-overview">{item.overview}</small>
          </div>
        ))}
      </>
    );
  }
}
