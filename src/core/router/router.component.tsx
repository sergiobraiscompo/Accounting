import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { WishlistPage } from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<WishlistPage />} />
        {/* <Route path={appRoutes.createAccount} element={<CreateAccountPage />} />
        <Route path={appRoutes.editAccount} element={<CreateAccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
