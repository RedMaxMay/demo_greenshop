import React, { useState } from "react";
import s from "./style.module.css";
import Container from "../Container/Container";
import ButtonLight from "../ButtonLight/ButtonLight";
import img from "./discount_img.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Coupon() {
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isCorrectPhone, setIsCorrectPhone] = useState(true);

  const phoneClass = isCorrectPhone
    ? s.input_wrap
    : `${s.input_wrap} ${s.input_wrap_error}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length > 5) {
      setIsCorrectPhone(true);
      setPhone("");
      setIsSent(true);
    } else {
      setIsCorrectPhone(false);
    }
  };

  return (
    <section className={s.coupon}>
      <Container>
        <div className={s.img_container}>
          <img src={img} alt="discount" />
        </div>
        {isSent ? (
          <div className={s.text_container}>
            <h3>
              <p>Thank you!</p>
              <p>Now the discount is tied to your phone number.</p>
              <p>Happy shopping :)</p>
            </h3>
          </div>
        ) : (
          <div className={s.text_container}>
            <h3>
              <span className={s.percentage}>5% off</span> <br /> on the first
              order
            </h3>

            <form className={s.form} method="post" onSubmit={handleSubmit}>
              <div className={phoneClass}>
                <PhoneInput
                  country={"de"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>

              <ButtonLight text="Get a discount" />
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
