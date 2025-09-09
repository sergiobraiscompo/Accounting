import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { FormComponent } from "@/layouts/app/components";
import { Movement } from "../../common/api/movements/movements.api.model";
import { MovementsTableComponent } from "./components";
import { mapMovementListFromApiToVm } from "./movements.mapper";
import classes from "./movements.page.module.css";

const openForm = () => {
  return (
    <FormComponent/>
  );
}



export const MovementsPage: React.FC = () => {
  const [movements, setMovementList] = React.useState<Movement[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      try {
        setMovementList(mapMovementListFromApiToVm(movements));
      } catch (error) {
        throw new Error("Error while charging the movements");
      }
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.onWorkingAdvice}>
        <h1>Page Under construction</h1>
      </div>
      <div>
        <div className={classes.header}>
          <h1>Your Movements</h1>
          <div className={classes.buttonContainer}>
            <p>Add Movement</p>
            <button onClick={openForm} className={classes.buttonAdd}><span>+</span></button>
          </div>
        </div>
        <MovementsTableComponent movements={movements} />
      </div>
      <FormComponent />
    </AppLayout>
  );
};
