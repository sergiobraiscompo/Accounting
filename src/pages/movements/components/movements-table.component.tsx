import React from "react";
import classes from "./movements-table.component.module.css";
import { MovementVm } from "../movement.vm";
import { MovementListComponent } from "./movements.component";

interface Props {
  movements: MovementVm[];
}

export const MovementsTableComponent: React.FC<Props> = (props) => {
  const { movements } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>Amount</span>
          <span className={classes.headerCell}>Movement Type</span>
          <span className={classes.headerCell}>Transaction Type</span>
          <span className={classes.headerCell}>Date</span>
        </div>

        {movements.map((movement) => (
          <MovementListComponent key={movement._id} movementList={movement} />
        ))}
      </div>
    </>
  );
};
