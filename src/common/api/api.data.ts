import Axios from "axios";
import { Account } from "./api.data-Model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/wishlist`;
export const getAccountList = (): Promise<Account[]> => Axios.get<Account[]>(urlAccount).then(({ data }) => data);