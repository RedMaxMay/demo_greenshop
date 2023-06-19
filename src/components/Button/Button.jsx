import React from "react";
import s from "./style.module.css";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={s.button}>
      {text}
    </button>
  );
}
