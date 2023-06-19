import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Sidebar({ onClick }) {
  const { categories } = useSelector((state) => state.categories);

  const checkActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <aside className={s.sidebar}>
      <h2>Categories</h2>

      <ul className={s.categories_list}>
        <li>
          <NavLink
            onClick={onClick}
            className={checkActive}
            to={`/products/sale`}
          >
            <p>SALE</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            className={checkActive}
            to={`/products/all`}
          >
            <p>All products</p>
          </NavLink>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              onClick={onClick}
              className={checkActive}
              to={`/products/${category.title}`}
            >
              <p>{category.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
