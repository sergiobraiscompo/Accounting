import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { MovementsPage } from "@/pages/movements/movements.page";
import { HomePage } from "@/pages/home";
import { TicketsPage } from "@/pages/tickets";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<HomePage />} />
        <Route path={appRoutes.movements} element={<MovementsPage />} />
        <Route path={appRoutes.tickets} element={<TicketsPage />} />
        {/* <Route path={appRoutes.shops} element={<ShopsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
