import {
  createTheme,
  Tabs,
  Theme,
  Typography,
  Box,
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

declare module "@mui/material/styles" {
  interface Palette {
    custom_color: Palette["primary"];
  }

  interface PaletteOptions {
    hover_color: PaletteOptions["primary"];
    border_color: PaletteOptions["primary"];
    background_color: PaletteOptions["primary"];
  }
}

// Design themes
export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "rgba(89, 0, 253, 0.705)",
    },
    secondary: {
      main: "rgb(148, 0, 0)",
    },
    error: {
      main: "#f44336",
    },
    background_color: {
      main: "#9600ff",
    },
    hover_color: {
      main: "rgb(97, 0, 0)",
    },
    border_color: {
      main: "#e5e5e5",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans - serif"].join(","),
    fontSize: 12,
    fontWeightRegular: 400,
    h1: {
      fontsize: "3rem",
      fontweigth: "600",
    },
    h2: {
      fontsize: "1.75rem",
      fontweigth: "600",
    },
    h3: {
      fontsize: "1.5rem",
      fontweigth: "600",
    },
  },
});

// index.js

export default function HomeComponent() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      {/* Body */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background-color",
          minHeight: 540,
          borderColor: "black",
          borderStyle: "solid",
        }}
      >
        <Typography>Text</Typography>
      </Container>

      {/* Navigation bar */}
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(
            {
              /*event*/
            },
            newValue
          ) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}

// // Components Styles
// export const DefaultContainerStyle = {
//   display: "flex",
//   p: "1",
//   bgcolor: "background_color",
//   height: "fit-content",
//   alignContent: "center",
//   justifyContent: "center",
//   ":hover": { bgcolor: "purple", color: "white" },
// };
//   <Button sx={{
//     bgcolor: "blue", color: "white", ":hover": { bgcolor: "orange", color: "purple" }
//   }}>
//     +
//   </Button>

// <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4 }} >
//   {services.map((service) => (
//     <Paper elevation={3}>
//       <Typography sx={{ mt: 10 }} variant="h3">
//         {service}
//       </Typography>

//       <Typography>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam saepe molestiae error omnis, facilis quos est quas eaque eum sapiente perferendis nulla quaerat ratione velit pariatur illum fugiat adipisci aliquid?
//       </Typography>

//       <Button variant="contained" sx={{ width: { xs: 1, md: 320 } }}>
//         View Description
//       </Button>
//     </Paper>
//   ))}
// </Box>
/* Custom style */
/*
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary_color);
  border: none;
  padding: 0.8em 1.5em;
  border-radius: var(--element-radius);
  color: #ffffff;
  cursor: pointer;
  font-weight: 900;
  transition: all ease 0.2s;
}

button:hover {
  background: var(--primary_color_darker);
  font-weight: 1000;
  font-style: italic;
  color: var(--hover_color);
} */

/* button:active {
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, 0.1),
    inset 0 2px 2px 2px rgba(0, 0, 0, 0.2), inset 0 0 2px 2px rgba(0, 0, 0, 0.1);
} */

// h1 {
//   font - size: 41px;
// }

// a {
//   color: white;
//   border: none;
// }

// .onWorkingAdvice {
//   font - family: system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
//   text - align: center;
//   padding: 40px;
//   color: white;
//   background: orange;
// }
