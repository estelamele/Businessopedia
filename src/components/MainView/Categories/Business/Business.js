import React from "react";
import * as s from "./Business.styles";

const Business = (props) => {
  const business = props.match.params.business;
  const businesses = {
    canada: {
      img: "/images/businesses/canada.png",
      description: "Canada is chilly"
    },
    brazil: {
      img: "/images/businesses/brazil.jpg",
      description: "Brazil is sunny"
    },
    australia: {
      img: "/images/businesses/australia.jpg",
      description: "Australia is boring"
    },
    india: {
      img: "/images/businesses/india.jpg",
      description: "India is awesome"
    },
    moldova: {
      img: "/images/businesses/moldova.jpeg",
      description: "Moldova is beautiful"
    },
    kenya: {
      img: "/images/businesses/kenya.jpg",
      description: "Kenya is breathtaking"
    }
  };

  return (
    <s.BusinessContainer>
      <s.BusinessImage img={businesses[business]["img"]} />
      <s.BusinessDescription>
        {businesses[business]["description"]}
      </s.BusinessDescription>
    </s.BusinessContainer>
  );
};

export default Business;
