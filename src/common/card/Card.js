import "./Card.css";

import Rating from "@mui/material/Rating";

export const Card = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="imgdiv">
        <img src={product.Image} alt={product.Name} loading="lazy" />
        <div className="ratingdiv">
          <div>{product.rating}</div>
          <div className="star">
            <Rating name="read-only" value={product.Rating} readOnly />
          </div>
        </div>
      </div>
      <div className="descdiv">
        <div className="title">{product.Name}</div>
        <div className="pricediv">
          <div className="price">
            RS. {Math.round(product.Price * (100 - product.Discount)) / 100}
          </div>
          <del className="pprice">Rs. {product.price}</del>
          <div className="pdiscount">({product.Discount} % OFF)</div>
        </div>
      </div>
    </div>
  );
};
