import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import ProductItemBtns from "../ProductItemBtns/ProductItemBtns";

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
}) {
  return (
    <div className={s.container}>
      <div className={s.btns_wrap}>
        <ProductItemBtns id={id} />
      </div>

      <Link to={`/product/${id}`}>
        <div className={s.product}>
          <div className={s.img_wrap}>
            {discont_price === null ? (
              ""
            ) : (
              <div className={s.discount}>SALE!</div>
            )}
            <img src={image} alt={title} />
          </div>
          <p className={s.title}>{title}</p>
          <div className={s.price_wrap}>
            {discont_price === null ? (
              <p className={s.price}>${price.toFixed(2)}</p>
            ) : (
              <>
                <p className={s.price}>${discont_price.toFixed(2)}</p>
                <p className={s.old_price}>${price.toFixed(2)}</p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
