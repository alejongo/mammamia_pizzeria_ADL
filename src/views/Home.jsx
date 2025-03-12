import "../App.css";

import { thousandSeparator } from "../helpers/thousandSeparator";
import { Header } from "../components/Header";
import { NavbarMenu } from "../components/NavbarMenu.jsx";
import { CardPizzaGrid } from "../components/CardPizzaGrid.jsx";

export const Home = () => {
  return (
    <>
      <CardPizzaGrid />
    </>
  );
};
