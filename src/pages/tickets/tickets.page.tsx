import React from "react";
import { useParams } from "react-router-dom";
import { mapTicketFromApiToVm } from "./tickets.mapper";
import {
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
} from "@/layouts/app/components";
import { Ticket } from "@/common/api/tickets";
import { TicketsTableComponent } from "./components";
import classes from './tickets.page.module.css'

export const TicketsPage: React.FC = () => {
  const [tickets, setTickets] = React.useState<Ticket[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      try {
        setTickets(mapTicketFromApiToVm(tickets));
      } catch (error) {
        throw new Error("Error while charging the tickets.");
      }
    }
  }, []);

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <div className={classes.onWorkingAdvice}>
      <h1>page</h1>
      <h1>Under construction</h1>
      </div>
       <TicketsTableComponent tickets={tickets}/>
      <FooterComponent />
    </>
  );
};
