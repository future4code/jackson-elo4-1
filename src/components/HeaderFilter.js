import React from "react";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";



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

const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 30px;

  @media (min-width: 680px){
    display
  }
`;

export default class HeaderFilter extends React.Component {
  state={
    inputMin: 0,
    inputMax: Infinity,
    searchText: "",
    category: "",
    productsHeader: []
  };

  inputMax = (event) =>{
    const valueInputMax = Number(event.target.value)
    const newValueFilter = {"maxValue": valueInputMax}
    this.props.onChangeFilter(newValueFilter)
  };

  inputMin = (event) =>{
    const valueInputMin = Number(event.target.value)
    const newValueFilter = {"minValue": valueInputMin}
    this.props.onChangeFilter(newValueFilter)
  };

  render() {
  
    return(
      <ContainerFilter>
        <ThemeProvider theme={theme}>
          <TextField variant="outlined" color="primary" type="number" min={0} placeholder="Valor minimo"
          onChange={this.inputMin}></TextField>
          <TextField variant="outlined" color="primary" type="number" min={0} placeholder="Valor maximo"
          onChange={this.inputMax}></TextField>
          <TextField variant="outlined" color="primary" value={this.props.searchTitle}type="text" placeholder="Titulo ou descrição"
          onChange={this.props.changeSearch}></TextField>
          <FormControl variant="outlined">
            <InputLabel color="secondary">Categoria</InputLabel>
            <Select label="categoria" value={this.state.category} onChange={this.category}>
              <MenuItem value={"acessorios"}>Acessórios</MenuItem>
              <MenuItem value={"casa"}>Casa</MenuItem>
              <MenuItem value={"decoracao"}>Decoração</MenuItem>
              <MenuItem value={"eco"}>Eco</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </ContainerFilter>
    );
  };
}
