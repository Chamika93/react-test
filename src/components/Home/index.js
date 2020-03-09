import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import { TourContext } from "../../context";

let source;
let testd = [];

const initialState = { isLoading: false, results: [], value: "" };

export default class Home extends Component {
  static contextType = TourContext;
  state = { ...this.context };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      // if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.tours, isMatch)
      });
    }, 300);
  };

  /* componentDidMount() {
    fetch(
      "https://www.triposo.com/api/20190906/tour.json?location_ids=Melbourne",
      {
        headers: {
          "X-Triposo-Account": "A8Y2YRTV",
          "X-Triposo-Token": "hgiq3zyo304rc0p3kfkh19zd224lunxh"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        source = data.results.map(x => {
          return {
            image: x.images[0].sizes.thumbnail.url,
            id: x.id,
            title: x.name,
            price: x.price.currency + " " + x.price.amount
          };
        });
        //this.setState({ results: data.results });
      })
      .catch(console.log);
  } */

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div className="search">
        <Grid>
          <Grid.Column width={12}>
            <Search
              className="searchT"
              fluid
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              {...this.props}
            />
          </Grid.Column>
        </Grid>
        <Feed></Feed>
      </div>
    );
  }
}

class Feed extends Component {
  componentDidMount() {
    fetch(
      "https://www.triposo.com/api/20190906/tour.json?location_ids=Melbourne",
      {
        headers: {
          "X-Triposo-Account": "A8Y2YRTV",
          "X-Triposo-Token": "hgiq3zyo304rc0p3kfkh19zd224lunxh"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        testd = data.results.map(x => {
          return {
            image: x.images[0].sizes.thumbnail.url,
            id: x.id,
            title: x.name,
            price: x.price.currency + " " + x.price.amount
          };
        });
        //this.setState({ results: data.results });
      })
      .catch(console.log);
  }
  render() {
    let abc = testd.map(x => {
      return (
        <Grid.Column>
          <Card>
            <Image src={x.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{x.title}</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    return (
      <Grid relaxed columns={4}>
        {abc}
      </Grid>
    );
  }
}
