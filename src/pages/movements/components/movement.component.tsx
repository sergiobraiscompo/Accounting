import React, { useState } from "react";
import classes from "./movement.form.component.module.css";
import { MovementsTableComponent } from "./movements-table.component";

export const FormComponent: React.FC = () => {
  const [amount /* setAmount*/] = useState("00.00");
  const [movementType /* setMovementType*/] = useState("accesory");
  const [transactionType /* setTransactionType*/] = useState("expense");

  // function handleChange(e: ) {
  //   setAmount(e.target.value);
  //   setMovementType(e.target.value);
  //   setTransactionType(e.target.value);
  // }

  return (
    <form className={classes.formWindow}>
      <div className={classes.formTitle}>
        <h1>Add Movement</h1>
      </div>

      <div className={classes.formField}>
        <label htmlFor="amount">Amount</label>
        <input type="number" value={amount} /* onChange={handleChange} */ />
      </div>

      <div className={classes.formField}>
        <label htmlFor="movement_type">Movement Type</label>
        <input type="text" value={movementType} /* onChange={handleChange} */ />
      </div>

      <div className={classes.formField}>
        <label htmlFor="transaction_type">Transaction Type</label>
        <input
          type="text"
          value={transactionType} /* onChange={handleChange} */
        />
      </div>

      <button className={classes.buttonAdd}>
        <span>+</span>
      </button>

      {/* // _id: number, quantity: number, movementType: MovementType,
      // transactionType: TransactionType date */}
      <div className={classes.movementsArray}>
        <MovementsTableComponent movements={[]} />
      </div>
    </form>
  );
};
