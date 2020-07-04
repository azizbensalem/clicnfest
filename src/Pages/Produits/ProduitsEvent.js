import React from "react";
import AppBar from "../../Components/Header/Navbar";
import { Menu } from "../../Components/Tabs";
import { Produits } from "./Index";


export const ProduitEvent = () => {
    return (
      <div>
        <AppBar />
        <div>
          <Menu value={2} />
          <Produits />
        </div>
      </div>
    );
};