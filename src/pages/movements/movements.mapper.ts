import * as apiModel from "@/common/api/movements/movements.api.model";
import * as viewModel from "./movement.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    _id: movement._id,
    quantity: movement.quantity,
    movementType: movement.movementType,
    transactionType: movement.transactionType,
    date: movement.date
  }), [])