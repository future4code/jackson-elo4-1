import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import CardImage from "./../img/card.svg";

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
  height: 140vh;
`;

const Title = styled.h3`
  color: #fdb930;
`;

const CardSvg = styled.img`
  width: 50%;
  margin: 20px 0;
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
    priceInput: 2,
    installmentsInput: 3,
    descriptionInput: "",
    paymentInput: "",
    categoryInput: "",
    urlInputValue: "",
  };

  onChangeProduct = (e) => {
    this.setState({ productInput: e.target.value });
    console.log(this.state.productInput);
  };

  onChangePrice = (e) => {
    this.setState({ priceInput: Number(e.target.value) });
    console.log(this.state.priceInput);
  };

  onChangeInstallments = (e) => {
    this.setState({ installmentsInput: Number(e.target.value) });
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
    this.setState({ urlInputValue: e.target.value });
    console.log(this.state.urlInputValue);
  };

  createProduct = () => {
    const body = {
      name: this.state.productInput,
      description: this.state.descriptionInput,
      price: this.state.priceInput,
      paymentMethod: this.state.paymentInput,
      category: this.state.categoryInput,
      photos: [this.state.urlInputValue],
      installments: this.state.installmentsInput,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products",
      body,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        alert(`Seu produto foi adicionado com sucesso!`);
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <ExtDiv>
            <IntDiv>
              <Button
                onClick={this.props.onClickBack}
                color="secondary"
                variant="outlined"
                size="small"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Voltar
              </Button>
              <CardSvg src={CardImage} />
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
              <FormControl variant="outlined">
                <Box width="225px">
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    color="secondary"
                  >
                    Método de Pagamento
                  </InputLabel>
                </Box>

                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={this.onChangePayment}
                  label="Categoria"
                >
                  <MenuItem value={"cartao"}>Cartão</MenuItem>
                  <MenuItem value={"avista"}>À vista</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <Box width="225px">
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    color="secondary"
                  >
                    Categoria
                  </InputLabel>
                </Box>

                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={this.onChangeCategory}
                  label="Categoria"
                >
                  <MenuItem value={"acessorios"}>Acessórios</MenuItem>
                  <MenuItem value={"casa"}>Casa</MenuItem>
                  <MenuItem value={"decoracao"}>Decoração</MenuItem>
                  <MenuItem value={"eco"}>Eco</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
                type="text"
                variant="outlined"
                label="URL"
                color="secondary"
                onChange={this.onChangeUrl}
              />

              <Button
                onClick={this.createProduct}
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
