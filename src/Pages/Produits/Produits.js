import React from "react";
import AppBar from "../../Components/Header/Navbar";
import { Menu } from "../../Components/Tabs";
import { Produits } from "./Index";

export const Produit = () => {
  return (
    <div>
      <AppBar />
      <div>
        <Produits />
      </div>
    </div>
  );
};
