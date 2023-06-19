import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import BasketPage from "./pages/BasketPage/BasketPage";

function App() {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basket);

  useEffect(() => {
    localStorage.setItem("GreenShop", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/greenshop" element={<MainPage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/:title" element={<ProductsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
