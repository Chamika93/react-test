import React, { Component } from "react";
import { TourContext } from "../../context";
import StyledHeader from "../../components/StyledHeader";

export default class SingleTour extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug
      // defaultBcg: defaultBcg
    };
  }
  static contextType = TourContext;

  render() {
    const { getTour } = this.context;
    const tour = getTour(this.state.slug);

    console.log(tour);

    if (!tour) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
        </div>
      );
    }
    const {
      image,
      bgimage,
      id,
      title,
      price,
      amount,
      vendor,
      vendor_tour_url
    } = tour;

    return (
      <>
        <StyledHeader img={bgimage}></StyledHeader>
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <h6>{title}</h6>
              <h6>Price : {price}</h6>
            </article>
            <article className="info">
              <h3>Vendor Info</h3>
              <h6>Vendor : {vendor}</h6>
              <h6>Check at the their site : </h6>
              <a href={vendor_tour_url}>Click Here</a>
            </article>
          </div>
        </section>
      </>
    );
  }
}
