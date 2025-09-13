import React from "react";
import { MovementVm } from "../movement.vm";
import { Box, Button, Paper, Typography } from "@mui/material";

interface Props {
  movementList: MovementVm;
}
const services = ["Service 1", "Service 2", "Service 3"];

export const MovementListComponent: React.FC<Props> = (props) => {
  const { movementList } = props;
  movementList;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {services.map((service) => (
        <Paper elevation={3}>
          <Typography sx={{ mt: 10 }} variant="h3">
            {service}
          </Typography>

          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            saepe molestiae error omnis, facilis quos est quas eaque eum
            sapiente perferendis nulla quaerat ratione velit pariatur illum
            fugiat adipisci aliquid?
          </Typography>

          <Button variant="contained" sx={{ width: { xs: 1, md: 320 } }}>
            View Description
          </Button>
        </Paper>
      ))}
    </Box>
  );
};
