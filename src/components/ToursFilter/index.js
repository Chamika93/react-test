import React from "react";
import { useContext } from "react";
import { TourContext } from "../../context";

const ToursFilter = () => {
  const context = useContext(TourContext);
  const { price, handleChange, minPrice, maxPrice } = context;
  return (
    <section className="filter-container">
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
};

export default ToursFilter;
