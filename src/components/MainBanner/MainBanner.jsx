import React from "react";
import s from "./style.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function MainBanner() {
  return (
    <div className={s.banner_container}>
      <Container>
        <h1>Welcome to Greenshop</h1>
        <p className={s.slogan}>
          Let's make a <br />
          better <span>planet</span>
        </p>
        <p className={s.info}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique garden. Order your
          favorite plants!
        </p>
        <Link to="/products/sale">
          <Button text="Sale" />
        </Link>
      </Container>
    </div>
  );
}
