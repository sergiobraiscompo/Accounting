enum MovementType {
  ticket,
  transaction,
  bizum
}

enum TransactionType {
  income,
  outcome
}

export interface Movement {
  "_id": number,
  "quantity": number,
  "movementType": MovementType,
  "transactionType": TransactionType,
  "date": Date
}