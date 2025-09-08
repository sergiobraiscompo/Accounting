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
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movements.map((movement) => (
          <MovementListComponent key={movement._id} movementList={movement} />
        ))}
      </div>
    </>
  );
};
