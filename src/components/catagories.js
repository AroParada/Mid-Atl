import React, { Component } from "react";
import { CollectionItem, Collection, Col, Row } from 'react-materialize';


class Catagories extends Component {
  render() {
    return (
        <Row>
  <Col
    m={12}
    s={6}
  >
    <Collection>
      <CollectionItem active href="#">
       ----- CATAGORIES-------
      </CollectionItem>
      <CollectionItem
        href="#"
      >
        Alvin
      </CollectionItem>
      <CollectionItem href="#">
        Alvin
      </CollectionItem>
      <CollectionItem href="#">
        Alvin
      </CollectionItem>
    </Collection>
  </Col>
</Row>
      
    );
  }
}

export default Catagories;