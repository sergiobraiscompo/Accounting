import React from "react";
import { AppLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { mapMovementListFromApiToVm } from "./movements.mapper";
import { Movement } from "../../common/api/movements/movements.api.model";
import { MovementsTableComponent } from "./components";
import classes from "./movements.page.module.css";

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
        <h1>page</h1>
        <h1>Under construction</h1>
      </div>
      <div>
        <div className={classes.header}>
          <h1>Your Movements</h1>
        </div>
        <MovementsTableComponent movements={movements} />
      </div>
    </AppLayout>
  );
};
