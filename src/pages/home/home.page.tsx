import React from "react";
import { AppLayout } from "@/layouts";
import { useParams } from "react-router-dom";
import { itemVm } from "./wishlist.vm";
import { mapWishlistFromApiToVm } from "./wishlist.mapper";
import { getwishlist } from "./api";
import { WishlistTableComponent } from "./components";
import classes from './wishlist.page.module.css';


export const WishlistPage: React.FC = () => {
    const [wishlist, setWishlist] = React.useState<itemVm[]>([]);
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
      if (id) {
        try {
          getwishlist(id).then((result) =>
            setWishlist(mapWishlistFromApiToVm(result))
          );
        } catch (error) {
            throw new Error("Error while charging wishlist");
        }
      }
  }, []);
  
    return (
      <AppLayout>
        <div>
          <div className={classes.header}>
            <h1>Your Wishlist</h1>
          </div>
          <WishlistTableComponent Wishlist={wishlist}/>
        </div>
      </AppLayout>
    );
};
