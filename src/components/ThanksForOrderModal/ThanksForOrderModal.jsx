import React from "react";
import s from "./style.module.css";
import flower from "./thanks.png";
import { useDispatch } from "react-redux";
import { deleteAllFromBasket } from "../../redux/basketSlice";
import { Link } from "react-router-dom";

export default function ThanksForOrderModal({ setIsSent }) {
  const dispatch = useDispatch();

  const onClick = () => {
    setIsSent((prev) => !prev);
    dispatch(deleteAllFromBasket());
  };

  return (
    <Link to='/greenshop'>
      <div className={s.modal} onClick={onClick}>
        <div className={s.modal_content}>
          <img src={flower} alt="thank you flower" />
          <p className={s.title}>Thank you for choosing Greenshop!</p>
          <p>
            Your order is already in the works, and you'll soon receive the
            freshest and most beautiful flowers
          </p>
          <span className={s.close}>x</span>
        </div>
      </div>
    </Link>
  );
}
