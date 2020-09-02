import React from "react";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f4f5f7",
    },
    secondary: {
      main: "#fdb930",
    },
  },
});

export default class LoginScreen extends React.Component {

  render() {
    return (
     <ThemeProvider theme={theme}>
        <h1>elo4</h1>
        <Button onClick={this.props.functionOnClickClient} variant="contained" color="secondary">VENDEDOR</Button>
        <Button onClick={this.props.functionOnClickSeller} variant="contained" color="secondary">CONSUMIDOR</Button>
      </ThemeProvider>
    );
  }
}