import React, { Component } from "react";
import { Carousel} from 'react-materialize';
import Logo from '../assets/mad_logo_1621017828__60458 (1).webp'

class Slider extends Component {
  render() {
    return (
 <Carousel
  carouselId="Carousel-52"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="red">
    <h2>
      First Panel
    </h2>
    <p>
      This is your first panel
    </p>
  </div>
  <div className="amber">
    <h2>
      Second Panel
    </h2>
    <p>
      This is your second panel
    </p>
  </div>
  <div className="green">
    <h2>
      Third Panel
    </h2>
    <p>
      This is your third panel
    </p>
  </div>
  <div className="blue">
    <h2>
      Fourth Panel
    </h2>
    <p>
      This is your fourth panel
    </p>
  </div>
</Carousel>
    );
  }
}

export default Slider;