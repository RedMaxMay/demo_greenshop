import React from "react";
import eco from "./eco.png";
import shipping from "./shipping.png";
import support from "./support.png";
import warranty from "./warranty.png";
import s from "./style.module.css";

export default function Features() {
  return (
    <section className={s.features}>
      <div>
        <img src={eco} alt="eco" />
        <h4>eco friendly products</h4>
      </div>
      <div>
        <img src={shipping} alt="shipping" />
        <h4>free shipping</h4>
      </div>
      <div>
        <img src={warranty} alt="warranty" />
        <h4>30 days warranty</h4>
      </div>
      <div>
        <img src={support} alt="support" />
        <h4>support service</h4>
      </div>
    </section>
  );
}
