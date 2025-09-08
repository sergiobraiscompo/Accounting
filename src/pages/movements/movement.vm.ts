enum MovementType {
  ticket,
  transaction,
  bizum
}

enum TransactionType {
  income,
  outcome
}

export interface MovementVm {
  _id: number,
  quantity: number,
  movementType: MovementType,
  transactionType: TransactionType,
  date: Date
}