import { DefaultContainerStyle } from "@/main-style";
import { Container, Typography } from "@mui/material";

export const FooterStyle: React.FC = () => {
  return (
    <Container sx={DefaultContainerStyle}>
      <Typography variant="h2">
        h2. Heading
      </Typography>
    </Container>
  );
};

