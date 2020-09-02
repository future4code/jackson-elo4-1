import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import ProductGrid from './components/ProductGrid.js'

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

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ProductGrid></ProductGrid>
      </div>
    );
  }
}
