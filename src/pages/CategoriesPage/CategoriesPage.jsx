import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import s from "./style.module.css";
import Coupon from "../../components/Coupon/Coupon";

export default function CategoriesPage() {
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Container>
        <h1 className={s.heading}>All Categories</h1>
        <div className={s.categories}>
          {categories.map((category) => (
            <CategoryItem key={category.title} {...category} />
          ))}
        </div>
        <Coupon />
      </Container>
    </main>
  );
}
