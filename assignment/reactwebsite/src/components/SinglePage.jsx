import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from './Homepage';
import { popularCategories } from './Home';

function SinglePage() {

  const { id } = useParams();
  
  const product = productlist.find((item) => item.id == id);
  const category = popularCategories.find((item) => item.id == id);
  if (product) {
    return (
      <div>
        <img src={product.image} alt={product.cardTitle} />
        <div>{product.cardTitle}</div>
      </div>
    );
  }

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