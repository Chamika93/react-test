import React, { Component } from "react";
//import { TourContext } from "../../context";
import TourSearch from "../../components/TourSearch";
import { TourConsumer } from "../../context";
import ToursList from "../../components/ToursList";
import ToursFilter from "../../components/ToursFilter";

export default class Tours extends Component {
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
              <TourSearch tours={tours} />
              <ToursFilter />
              <ToursList tours={sortedTours} />
            </>
          );
        }}
      </TourConsumer>
    );
  }
}
