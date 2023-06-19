import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoryItem({ title, image, id }) {
  const { isInitialCategories } = useSelector((state) => state.categories);

  return (
    <div className={s.category}>
      <Link to={`/products/${title}`}>
        <div className={s.img_wrap}>
          <img src={image} alt={title} />
        </div>
        <div className={s.title}>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}
