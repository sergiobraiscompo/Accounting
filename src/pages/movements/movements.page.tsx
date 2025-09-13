import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { Movement } from "../../common/api/movements/movements.api.model";
import { mapMovementListFromApiToVm } from "./movements.mapper";
import { Box, Button, Container, Typography } from "@mui/material";

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
    <Container sx={{
      display: "flex", flexDirection: "row",
      ":hover": { bgcolor: "purple", color: "white" }, p: "1", bgcolor: "tomato", height: "fit-content", alignContent: "center", justifyContent: "center"
    }}>
      <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
        Your movements list
      </Typography>
      
      <Button sx={{
        bgcolor: "blue", color: "white", ":hover": { bgcolor: "orange", color: "purple" }
      }}>
        +
      </Button>
      </Container>

      <Box>

      </Box>
    </AppLayout>
  );
};
