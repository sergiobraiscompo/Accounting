import Axios from "axios";
import { item } from "./wishlist.api-model";

const urlWishlist = `${import.meta.env.VITE_BASE_API_URL}/wishlist`;

export const getwishlist = (itemId: string): Promise<item[]> =>
  Axios.get<item[]>(urlWishlist, { params: { itemId } })
    .then(({ data }) => data);
