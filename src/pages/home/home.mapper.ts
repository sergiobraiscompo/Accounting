import * as apiModel from "./api/wishlist.api-model";
import * as viewModel from "./wishlist.vm";

export const mapWishlistFromApiToVm = (
  wishlist: apiModel.item[]
): viewModel.itemVm[] =>
  wishlist.map((item) => ({
    _id: item._id,
    description: item.description,
  }), [])


