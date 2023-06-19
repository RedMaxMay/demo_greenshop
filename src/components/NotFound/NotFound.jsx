import React from "react";
import Button from "../../components/Button/Button";
import img from "./404.png";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function NotFound() {
  return (
    <div className={s.page}>
      <img src={img} alt="Page is not found" />
      <p>Oops, something happened, this page is missing!</p>
      <Link to="/demo_greenshop">
        <Button text="back to home page" />
      </Link>
    </div>
  );
}
