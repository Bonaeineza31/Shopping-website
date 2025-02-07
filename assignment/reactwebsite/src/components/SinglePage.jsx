import React from "react";
import { useParams } from "react-router-dom";
import { popularCategories } from './Home';

function SinglePage() {

  const { id } = useParams();
  

  if (category) {
    return (
      <div>
        <img src={category.image} alt={category.name} />
        <div>{category.name}</div>
      </div>
    );
  }

  return <div>Item not found</div>;
}

export default SinglePage;