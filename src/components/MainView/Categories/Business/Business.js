import React from "react";
import * as s from "./Business.styles";

const Business = (props) => {
  const business = props.match.params.business;
  const businesses = {
    accessories: {
      img: "/images/businesses/accessories.jpg",
      description: "Accessories category"
    },
    arts: {
      img: "/images/businesses/arts.jpg",
      description: "Arts and culture"
    },
    clothes: {
      img: "/images/businesses/clothes.jpg",
      description: "Clothes category"
    },
    pets: {
      img: "/images/businesses/pets.jpg",
      description: "Pets services"
    },
    restaurants: {
      img: "/images/businesses/restaurants.jpg",
      description: "Restaurants category"
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
