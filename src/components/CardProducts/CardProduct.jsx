import React from "react";
import { useNavigate } from "react-router-dom";

// assets
import "../CardProducts/CardProduct.scoped.css";

// services
// import { getProductDetail } from "../../services/product";

export default function CardProduct(props) {
  const navigate = useNavigate();
  const { id, show } = props;
  // console.log(show);
  const handleClick = () => {
    navigate(`/products/detail/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="btn-products-card col-4 col-md-4 col-lg-3 ms-md-0">
      <div className="card card-products border-0 align-items-center text-center mb-md-5 mb-5">
        {show ? (
          <button
            onClick={() => {
              navigate(`/products/edit/${id}`);
              window.scrollTo(0, 0);
            }}
            className="btn rounded-circle btn-edit w-10"
          >
            EDIT
          </button>
        ) : (
          <></>
        )}
        <img
          src={props.image}
          className="card-img-top rounded-circle"
          alt="product-img"
          onClick={handleClick}
        />
        <span className="text-dark position-absolute translate-middle-y badge rounded-pill bg-white badge-position">
          {props.discount}
        </span>
        <div className="card-body">
          <p onClick={handleClick} className="card-product-title">
            {props.title}
          </p>
          <p className="card-price">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
