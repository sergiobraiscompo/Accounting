// /* :root {
//   font-family: "Open Sans", sans-serif;
//   font-size: 16px;
//   line-height: 1.5;
//   font-weight: 400;

import { DefaultContainerStyle } from "@/main-style";
import { Card, CardHeader, Container, Typography } from "@mui/material";

//   /* colors */
//   --element-background-color: #9600ff;
//   --primary_color: rgba(89, 0, 253, 0.705);
//   --primary_color_darker: rgba(63, 0, 180, 0.705);
//   --hover_color: rgb(97, 0, 0);
// }

// .header {
//   height: 50px;
//   background-color: var(--element-background-color);
// }

// .header_logo {
//   width: 200px;
//   justify-self: center;
// }

// .usuario {
//   display: flex;
//   align-items: center;
//   color: #ffffff;
// }

// .usuario p:before {
//   content: "";
//   background: url(assets/icon-user.svg) no-repeat center center;
//   width: 40px;
//   height: 15px;
//   position: relative;
//   left: 0;
//   top: 0;
//   padding-right: 20px;
//   margin-right: 10px;
// }

// @media screen and (max-width: 500px) {
//   .header > div {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//   }
// } */

export const HeaderStyle: React.FC = () => {
  return (
    <Container sx={{DefaultContainerStyle}, }>
      <Typography variant="h2">
        h2. Heading
      </Typography>
    </Container>
  );
};

