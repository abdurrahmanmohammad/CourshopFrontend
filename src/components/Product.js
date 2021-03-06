import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  // Extract product from props
  const { product } = props;
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card">
          <img
            className="card-img-top"
            src={`https://courshopbackend.herokuapp.com/${product.imageCover}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price.toFixed(2)}</p>
            <button className="btn btn-primary">
              <i className="fas fa-cart-plus" /> View Product
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
