import Axios from "axios";
import { Movement } from "./movements.api.model";

const urlMovementsList = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (movementId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovementsList, { params: { movementId } })
    .then(({ data }) => data);
