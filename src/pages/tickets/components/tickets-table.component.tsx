import React from "react";
import classes from "./tickets-table.component.module.css"
import { TicketsComponent } from "./tickets.component";
import { TicketVm } from "../ticket.vm";

interface Props {
  tickets: TicketVm[];
}

export const TicketsTableComponent: React.FC<Props> = (props) => {
  const { tickets } = props;

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

        {tickets.map((ticket) => (
          <TicketsComponent key={ticket._id} tickets={ticket} />
        ))}
      </div>
    </>
  );
};
