import React, { Component } from "react";
import { TourContext } from "../../context";

export default class index extends Component {
  static contextType = TourContext;

  render() {
    const value = this.context;
    console.log(value);
    return (
      <div>
        <p>Hiiiiii</p>
      </div>
    );
  }
}
