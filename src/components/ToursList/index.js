import React from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ToursList = props => {
  return (
    <Grid relaxed columns={4}>
      {props.tours.map(x => {
        return (
          <Grid.Column key={x.id}>
            <Card>
              <Image src={x.image} wrapped ui={false} />
              <div className="price-top">
                <h6>{x.price}</h6>
              </div>
              <Card.Content>
                <Card.Header>{x.title}</Card.Header>
                <Card.Meta>
                  <span className="date">By {x.vendor}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
            <Link to={`/tour/${x.id}`} className="btn-primary room-link">
              go
            </Link>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default ToursList;
