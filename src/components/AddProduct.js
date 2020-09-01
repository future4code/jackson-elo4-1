import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const ExtDiv = styled.div`
  display: flex;
  background-color: #a1a1a1;
  justify-content: center;
  height: auto;
`;

const IntDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  padding: 24px;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h3`
  color: #fdb930;
`;

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

export default class AddProduct extends React.Component {
  state = {
    productInput: "",
    priceInput: "",
    installmentsInput: "",
    descriptionInput: "",
    paymentInput: "",
    categoryInput: "",
    urlInput: "",
  };

  onChangeProduct = (e) => {
    this.setState({ productInput: e.target.value });
    console.log(this.state.productInput);
  };

  onChangePrice = (e) => {
    this.setState({ priceInput: e.target.value });
    console.log(this.state.priceInput);
  };

  onChangeInstallments = (e) => {
    this.setState({ installmentsInput: e.target.value });
    console.log(this.state.installmentsInput);
  };

  onChangeDescription = (e) => {
    this.setState({ descriptionInput: e.target.value });
    console.log(this.state.descriptionInput);
  };

  onChangePayment = (e) => {
    this.setState({ paymentInput: e.target.value });
    console.log(this.state.paymentInput);
  };

  onChangeCategory = (e) => {
    this.setState({ categoryInput: e.target.value });
    console.log(this.state.categoryInput);
  };

  onChangeUrl = (e) => {
    this.setState({ urlInput: e.target.value });
    console.log(this.state.urlInput);
  };

  createProduct = () => {
    const body = {};

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
    );
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ExtDiv>
            <IntDiv>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Voltar
              </Button>
              <Title>Cadastre seu produto</Title>
              <TextField
                required
                variant="outlined"
                label="Produto"
                color="secondary"
                onChange={this.onChangeProduct}
              />
              <TextField
                required
                type="number"
                variant="outlined"
                label="Valor"
                color="secondary"
                onChange={this.onChangePrice}
              />
              <TextField
                required
                type="number"
                variant="outlined"
                label="Parcelas"
                color="secondary"
                onChange={this.onChangeInstallments}
              />
              <TextField
                required
                type="text"
                variant="outlined"
                label="Descrição"
                color="secondary"
                onChange={this.onChangeDescription}
              />
              <TextField
                required
                type="text"
                variant="outlined"
                label="Método de Pagamento"
                color="secondary"
                onChange={this.onChangePayment}
              />

              <TextField
                required
                type="text"
                variant="outlined"
                label="Categoria"
                color="secondary"
                onChange={this.onChangeCategory}
              />

              <TextField
                required
                type="text"
                variant="outlined"
                label="URL"
                color="secondary"
                onChange={this.onChangeUrl}
              />

              <Button
                color="secondary"
                variant="contained"
                endIcon={<AddIcon />}
              >
                Adicionar Produto
              </Button>
            </IntDiv>
          </ExtDiv>
        </ThemeProvider>
      </div>
    );
  }
}
