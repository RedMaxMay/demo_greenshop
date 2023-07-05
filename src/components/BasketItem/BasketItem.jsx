import React from "react";
import s from "./style.module.css";
import ButtonLight from "../ButtonLight/ButtonLight";
import { useDispatch } from "react-redux";
import {
  decrementInBasket,
  deleteFromBasket,
  incrementInBasket,
} from "../../redux/basketSlice";

export default function BasketItem({
  id,
  image,
  title,
  price,
  discont_price,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_item}>
      <div className={s.img_wrap}>
        <img src={image} alt={title} />
      </div>

      <p className={s.title}>{title}</p>

      <p className={s.price_wrap}>${(discont_price || price)?.toFixed(2)}</p>

      <div className={s.quantity_wrap}>
        <ButtonLight text="-" onClick={() => dispatch(decrementInBasket(id))} />
        <p>{quantity}</p>
        <ButtonLight text="+" onClick={() => dispatch(incrementInBasket(id))} />
      </div>

      <p className={s.price_total}>
        ${((discont_price || price) * quantity).toFixed(2)}
      </p>

      <svg
        onClick={() => dispatch(deleteFromBasket(id))}
        className={s.icon}
        width="40"
        height="40"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8892 8.55409C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55409"
          stroke="#727272"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3651 5.47981H1.2146"
          stroke="#727272"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7148 5.47981C12.7148 5.47981 13.2434 1.7141 9.28911 1.7141C5.33578 1.7141 5.86435 5.47981 5.86435 5.47981"
          stroke="#727272"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
