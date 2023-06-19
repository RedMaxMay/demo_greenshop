import React from "react";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import { useEffect } from "react";
import { resetSearchFilter } from "../../redux/productSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetSearchFilter());
    // eslint-disable-next-line
  }, []);

  const { title } = useParams();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);

  const products = useSelector(({ products }) => {
    if (title === undefined) {
      return products.products;
    } else if (title === "sale") {
      return products.products.filter(
        (product) => product.discont_price !== null
      );
    } else {
      const currentCategory = categories.find((cat) => cat.title === title);

      if (currentCategory === undefined) return null;

      return products.products.filter(
        (prod) => prod.categoryId === currentCategory.id
      );
    }
  });

  useEffect(() => {
    if (!products) {
      navigate("/404");
    }
  }, [navigate, products]);

  return (
    <main>
      <Container>
        <h1>
          {title === undefined ? "ALL PRODUCTS" : title.toLocaleUpperCase()}
        </h1>
        <div className={s.wrap}>
          <div className={s.desktop_aside}>
            <Sidebar />
          </div>
          <div className={s.products}>
            <ProductsFilterBar />
            {products === null
              ? ""
              : products
                  .filter(
                    ({ selectShow, priceShow }) => selectShow && priceShow
                  )
                  .map((prod) => <ProductItem key={prod.id} {...prod} />)}
          </div>
        </div>
      </Container>
    </main>
  );
}
