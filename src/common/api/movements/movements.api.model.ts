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
  "amount": number,
  "movementType": MovementType,
  "transactionType": TransactionType,
  "date": Date
}