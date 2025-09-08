import Axios from "axios";
import { Ticket } from "../tickets/tickets.api.model";

const urlTickets = `${import.meta.env.VITE_BASE_API_URL}/tickets`;

export const getTickets = (ticketId: string): Promise<Ticket[]> =>
  Axios.get<Ticket[]>(urlTickets, { params: { ticketId } })
    .then(({ data }) => data);
