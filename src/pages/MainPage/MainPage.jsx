import React, { useEffect } from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import Container from "../../components/Container/Container";
import MainCategories from "../../components/MainCategories/MainCategories";
import Coupon from "../../components/Coupon/Coupon";
import MainSale from "../../components/MainSale/MainSale";
import Features from "../../components/Features/Features";

export default function MainPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main>
      <MainBanner />

      <Container>
        <Features />
      </Container>

      <Container>
        <MainCategories />
      </Container>

      <Coupon />

      <Container>
        <MainSale />
      </Container>
    </main>
  );
}
