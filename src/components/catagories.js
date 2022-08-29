import React, { Component } from "react";
import { CollectionItem, Collection, Col, Row } from 'react-materialize';


class Catagories extends Component {
  render() {
    return (
        <Row>
  <Col
    m={6}
    s={12}
  >
    <Collection>
      <CollectionItem href="#">
        Alvin
      </CollectionItem>
      <CollectionItem
        active
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