import React from "react";
import { Button, Container, Typography } from "@mui/material";

export const HeaderComponent: React.FC = () => {
  return (
    <Container sx={{
      display: "flex", flexDirection: "row",
      ":hover": { bgcolor: "purple", color: "white" }, p: "1", bgcolor: "tomato", height: "fit-content", alignContent: "center", justifyContent: "center"
    }}>
      <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
        h1. Heading
      </Typography>
      
      <Button sx={{
        bgcolor: "blue", color: "white", ":hover": { bgcolor: "orange", color: "purple" }
      }}>
        +
      </Button>
    </Container>
  );
};
