import { AppLayout } from "@/layouts";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

const services = ["Service 1", "Service 2", "Service 3"]

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <Container sx={{
        display: "flex", flexDirection: "row",
        ":hover": { bgcolor: "purple", color: "white" }, p: "1", bgcolor: "tomato", height: "fit-content", alignContent: "center", justifyContent: "center"
      }}>
        <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
          h1. Heading
        </Typography>
        <Typography variant="h2">
          h2. Heading
        </Typography>
        <Button sx={{
          bgcolor: "blue", color: "white", ":hover": { bgcolor: "orange", color: "purple" }
        }}>
          +
        </Button>
      </Container>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4 }} >
        {services.map((service) => (
          <Paper elevation={3}>
            <Typography sx={{ mt: 10 }} variant="h3">
              {service}
            </Typography>

            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam saepe molestiae error omnis, facilis quos est quas eaque eum sapiente perferendis nulla quaerat ratione velit pariatur illum fugiat adipisci aliquid?
            </Typography>

            <Button variant="contained" sx={{ width: { xs: 1, md: 320 } }}>
              View Description
            </Button>
          </Paper>
        ))}
      </Box>
    </AppLayout >
  );
};
