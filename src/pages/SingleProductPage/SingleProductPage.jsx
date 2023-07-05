import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import s from "./style.module.css";
import Button from "../../components/Button/Button";
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";
import NotFound from "../../components/NotFound/NotFound";
import { initialProducts } from "../../initialValue/products";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setIsAdded(false);
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setIsAdded(false);
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const cartHandle = () => {
    dispatch(addToBasket({ id: +id, quantity }));
    setIsAdded(true);
  };

  useEffect(() => {
    setProduct(initialProducts[id - 1]);
  }, [id]);

  if (product === undefined) {
    return (
      <main>
        <NotFound />
      </main>
    );
  } else if (product.id) {
    return (
      <main>
        <Container>
          <div className={s.product}>
            <div className={s.img_wrap}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={s.all_info_wrap}>
              <h1 className={s.title}>{product.title}</h1>

              <div className={s.price_wrap}>
                {product.discont_price === null ? (
                  <p className={s.price}>${product.price.toFixed(2)}</p>
                ) : (
                  <>
                    <p className={s.price}>
                      ${product.discont_price.toFixed(2)}
                    </p>
                    <p className={s.old_price}>${product.price.toFixed(2)}</p>
                  </>
                )}
              </div>

              <div className={s.btns}>
                <div className={s.quantity_wrap}>
                  <ButtonLight text="-" onClick={handleDecrement} />
                  <p>{quantity}</p>
                  <ButtonLight text="+" onClick={handleIncrement} />
                </div>
                {isAdded ? (
                  <Button text="✔ Added to cart" />
                ) : (
                  <Button onClick={cartHandle} text="Add to Cart" />
                )}
              </div>

              <div className={s.description}>
                <p className={s.description_title}>Description: </p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    );
  } else {
    return (
      <main>
        <Container>
          <p>Loading...</p>
        </Container>
      </main>
    );
  }
}
