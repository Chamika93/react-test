import React, { Component } from "react";
import { TourContext } from "../../context";
import { TourConsumer } from "../../context";
import ToursList from "../ToursList";
import Title from "../Title";

export default class index extends Component {
  static contextType = TourContext;

  // static contextType = TourContext;
  render() {
    return (
      <TourConsumer>
        {value => {
          const { loading, tours, sortedTours } = value;

          if (loading) {
            //return <Loading />;
          }
          return (
            <>
              <section className="featured-rooms">
                <Title title="Featured Tours" />
                <div className="featured-rooms-center">
                  <ToursList tours={tours.slice(0, 4)} />
                </div>
              </section>
            </>
          );
        }}
      </TourConsumer>
    );
  }
}
