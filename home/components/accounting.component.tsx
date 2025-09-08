import React from "react";
// import * as classes  from "./wishlist.component.module.css";
import { itemVm } from "../wishlist.vm";

interface Props {
  wishlistItem: itemVm;
}

export const WishlistItemComponent: React.FC<Props> = (props) => {
  const { wishlistItem } = props;
wishlistItem
  return (
    <div className="itemcard">

      {/* <span className={`${classes.dataCell} ${classes.center}`}>
        {wishlistItem._id}
      </span>

      <span className={`${classes.dataCell} ${classes.center}`}>
        {wishlistItem.description}
      </span> */}

    </div>
  );
};
