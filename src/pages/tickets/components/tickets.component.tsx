import React from "react";
import { TicketVm } from "../ticket.vm";

interface Props {
  tickets: TicketVm;
}

export const TicketsComponent: React.FC<Props> = (props) => {
  const { tickets } = props;
  tickets;

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
