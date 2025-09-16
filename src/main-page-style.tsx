import {
  createTheme,
  Theme,
  Box,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Typography,
} from "@mui/material";
import * as React from "react";
import { borderColor, display, flex, flexDirection, height, justifyContent, padding, sizing } from '@mui/system';
import { ThemeProvider } from "@mui/material/styles";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { alignProperty } from "@mui/material/styles/cssUtils";
import {
  AlignVerticalBottom,
  BorderAllRounded,
  Height,
  Margin,
  RadioRounded,
} from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";

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

// Body
const bodyDesign = {
  display: "flex",
  flexDirection: "column",
  bgcolor: "purple",
  borderColor: "black",
  Height: 1,
  Width: 1,
  borderStyle: "solid",
};

// Items display
const paperBoxDesign = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  bgcolor: "purple",
  borderColor: "white",
  borderStyle: "solid",
  height: 1,
  width: "fit-content",
  padding: 1
}

const paperBoxTitleDesign = {
  color: "white"
}

const paperItemDesign = {
  justifyContent: "space-between",
  bgcolor: "orange",
  height: 50,
  width: 60,
  borderColor: "white",
  borderStyle: "solid",
}

const paperItemsContainerDesign = {
  display: "flex",
  flexDirection: "row",
  borderColor: "white",
  justifyContent: "space-between",
  height: "fit-content",
  width: 1,
  padding: 1,
}

// Bottom navigation bar
const bottomNavDesign = {
  justifyContent: "space-around",
  bgcolor: "black",
  borderColor: "white",
  borderStyle: "solid",
  color: "white",
  width: 1,
  borderRadius: 4
};

const iconsDesign = {
  color: "white",
  bgcolor: "cyan",
  borderRadius: 10,
};

// index.js

export default function HomeComponent() {
  const [value, setValue] = React.useState(0);

  return (
    // Body
    <Container sx={bodyDesign}>

      {/* First Paper row */}
      <Box sx={paperBoxDesign}>
        <Typography variant="h3" sx={paperBoxTitleDesign}>
          Items
        </Typography>
        <Container sx={paperItemsContainerDesign}>

          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
        </Container>
      </Box>
      {/* Second Paper row */}
      <Box sx={paperBoxDesign}>
        <Typography variant="h3" sx={paperBoxTitleDesign}>
          Items
        </Typography>
        <Container sx={paperItemsContainerDesign}>

          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
        </Container>
      </Box>
      {/* Third Paper row */}
      <Box sx={paperBoxDesign}>
        <Typography variant="h3" sx={paperBoxTitleDesign}>
          Items
        </Typography>
        <Container sx={paperItemsContainerDesign}>

          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
          <Paper elevation={12} sx={paperItemDesign}></Paper>
        </Container>
      </Box>

      {/* Navigation bar */}
      <Box sx={{ minWidth: 960 }}>
        <BottomNavigation
          sx={bottomNavDesign}
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
          <BottomNavigationAction
            sx={iconsDesign}
            label="Recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            sx={iconsDesign}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            sx={iconsDesign}
            label="Nearby"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
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
