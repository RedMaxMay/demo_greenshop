import React, { useEffect, useState } from "react";
import {
  priceFilter,
  searchProducts,
  sortFilter,
} from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import s from "./style.module.css";
import Sidebar from "../Sidebar/Sidebar";
import ButtonLight from "../ButtonLight/ButtonLight";

export default function ProductsFilterBar() {
  const [searchValue, setSearchValue] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState("Default");

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const sortProducts = (e) => {
    setSortType(e.target.value);
    dispatch(sortFilter(e.target.value));
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(searchProducts(searchValue));
  }, [dispatch, searchValue]);

  useEffect(() => {
    const priceParams = { priceFrom, priceTo };
    dispatch(priceFilter(priceParams));
  }, [dispatch, priceFrom, priceTo]);

  return (
    <>
      <div
        onClick={handleFilterClick}
        className={`${s.filter_backdrop} ${isOpen ? s.open : ""}`}
      ></div>
      <div className={s.filters_btn}>
        <ButtonLight onClick={handleFilterClick} text=" &#9783; Filters" />
      </div>
      <div className={s.active_filters}>
        <p>
          Sort type: <span className={s.bold_def}>{sortType}</span>
        </p>
        {searchValue ? (
          <p>
            Search:{" "}
            <span onClick={() => setSearchValue("")} className={s.bold}>
              {searchValue}
            </span>
          </p>
        ) : (
          ""
        )}
        {priceFrom ? (
          <p>
            Price from:{" "}
            <span onClick={() => setPriceFrom("")} className={s.bold}>
              {priceFrom}
            </span>
          </p>
        ) : (
          ""
        )}
        {priceTo ? (
          <p>
            Price to:{" "}
            <span onClick={() => setPriceTo("")} className={s.bold}>
              {priceTo}
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={`${s.filter_bar} ${isOpen ? s.open : ""}`}>
        <div className={s.search_wrap}>
          <label className={s.search_wrap}>
            <svg
              className={s.search_icon}
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="#46A358"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z" />
            </svg>
            <input
              className={s.search_input}
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={inputHandler}
            />
          </label>
          <button className={s.clear_btn} onClick={() => setSearchValue("")}>
            X
          </button>
        </div>

        <fieldset className={s.price_field}>
          <span className={s.price_title}>Price: </span>
          <div className={s.price_input_wrap}>
            <button
              className={s.clear_price_btn}
              onClick={() => setPriceFrom("")}
            >
              X
            </button>
            <input
              type="number"
              name="priceFrom"
              placeholder="From"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </div>
          <div className={s.price_input_wrap}>
            <button
              className={s.clear_price_btn}
              onClick={() => setPriceTo("")}
            >
              X
            </button>
            <input
              type="number"
              name="priceTo"
              placeholder="To"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </div>
        </fieldset>

        <select className={s.select} onChange={sortProducts}>
          <option value="Default">Default</option>
          <option value="Price - Low to High">Price - Low to High</option>
          <option value="Price - High to Low">Price - High to Low</option>
        </select>
        <div className={s.mob_sidebar}>
          <Sidebar onClick={handleFilterClick} />
        </div>
      </div>
    </>
  );
}
