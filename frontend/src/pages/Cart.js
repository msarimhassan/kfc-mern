import React from "react";
import CartProdItem from "../components/CartProdItem";
import Stepper from "../components/Stepper";
import { Container, Grid } from "@mui/material";
import ProceedToCheckout from "../components/ProceedToCheckout";
export default function Cart() {
  return (
    <Container>
      <div className="cart">
        <Stepper step={1} />
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 3 }}>
          <Grid item className="cart-prod-item" md={8} sm={12} xs={12}>
            <CartProdItem />
            <CartProdItem />
            <CartProdItem />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <ProceedToCheckout />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}