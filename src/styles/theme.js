import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme({});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

//Mui Theme Provider wrap around other Material UI components and override their styles
//https://material-ui.com/customization/theming/

export default createMuiTheme({
  palette: {
    primary: {
      main: "#212121"      , 
    },
    secondary: {
      main: "#58a5f0",
    },
  },
  overrides: {
      MuiButton: {
          label: {
              color: 'black'
          }
      },
      MuiTypography: {
        root: {
          color: 'white'
        }
      }
  }
  
});
