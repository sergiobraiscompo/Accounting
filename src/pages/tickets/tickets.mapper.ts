import * as apiModel from "@/common/api/tickets/tickets.api.model";
import * as viewModel from "./ticket.vm";

export const mapTicketFromApiToVm = (
  tickets: apiModel.Ticket[]
): viewModel.TicketVm[] =>
  tickets.map((ticket) => ({
    _id: ticket._id,
    date: ticket.date,
    items: ticket.items,
    total: ticket.total
  }), [])


