import React from "react";
import classes from "./wishlist-table.component.module.css";
import { itemVm } from "../wishlist.vm";
import { WishlistItemComponent } from "./wishlist.component";

interface Props {
  Wishlist: itemVm[];
}

export const WishlistTableComponent: React.FC<Props> = (props) => {
  const { Wishlist } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {Wishlist.map((item) => (
          <WishlistItemComponent key={item._id} wishlistItem={item} />
        ))}
      </div>
    </>
  );
};
