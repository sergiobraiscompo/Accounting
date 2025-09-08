import React from "react";
import { MovementVm } from "../movement.vm";

interface Props {
  movementList: MovementVm;
}

export const MovementListComponent: React.FC<Props> = (props) => {
  const { movementList } = props;
  movementList;
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
