import React from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem/BasketItem";
import s from "./style.module.css";
import BasketTotal from "../../components/BasketTotal/BasketTotal";
import { initialProducts } from "../../initialValue/products";

export default function BasketPage() {
  const { basket } = useSelector((state) => state.basket);
  const basketProducts = basket.map((item) => {
    const product = initialProducts.find((prod) => prod.id === item.id);
    return { ...product, ...item };
  });

  const totalPrice = basketProducts.reduce(
    (sum, item) => sum + (item.discont_price || item.price) * item.quantity,
    0
  );

  return (
    <main>
      <Container>
        <h1>Shopping cart</h1>

        {basket.length === 0 ? (
          <div className={s.empty}>Your cart is empty...</div>
        ) : (
          <div className={s.basket}>
            <div className={s.details}>
              <div className={s.info}>
                <p className={s.products}>Products</p>
                <p className={s.price}>Price</p>
                <p className={s.quantity}>Quantity</p>
                <p className={s.total}>Total</p>
              </div>
              {basketProducts.map((prod) => (
                <BasketItem key={prod.id} {...prod} />
              ))}
            </div>
            <BasketTotal totalPrice={totalPrice} basket={basketProducts} />
          </div>
        )}
      </Container>
    </main>
  );
}
