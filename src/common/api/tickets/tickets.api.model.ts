interface Product {
  "id": number,
  "name": string,
  "quantity": number,
  "price": number,
  "shop": string,
  "description": string
}

export interface Ticket {
  "_id": number,
  "items": Product[],
  "date": Date,
  "total": number
}