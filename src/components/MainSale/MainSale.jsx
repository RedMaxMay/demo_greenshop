import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import ButtonLight from "../ButtonLight/ButtonLight";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";

export default function MainSale() {
  const { products } = useSelector((state) => state.products);
  const productsWithDiscount = products.filter(
    (prod) => prod.discont_price !== null
  );

  return (
    <section className={s.main_sale_wrap}>
      <div className={s.info}>
        <h2>Products on Sale</h2>
        <Link to="/products/sale">
          <ButtonLight text="All sale" />
        </Link>
      </div>

      <div className={s.products}>
        {productsWithDiscount.map((prod, index) => {
          return index <= 7 ? <ProductItem key={prod.title} {...prod} /> : "";
        })}
      </div>
    </section>
  );
}
