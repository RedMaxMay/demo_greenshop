import React from "react";
import s from "./style.module.css";

export default function ButtonLight({ text, onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      {text}
    </button>
  );
}
