export interface Product {
  id: number,
  name: string,
  quantity: number,
  price: number,
  shop: string,
  description: string
}

export interface TicketVm {
  _id: number;
  items: Product[],
  date: Date,
  total: number
}