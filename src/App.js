import React from "react";
import axios from "axios";
import styled from "styled-components";

import LoginScreen from "./components/LoginScreen";
import ProductGrid from "./components/ProductGrid";
import SellerPanel from "./components/SellerPanel";
import AddProduct from "./components/AddProduct"

const ContainerApp = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;



export default class App extends React.Component {
  state={
    pageRender: "pageDirection"
  };

  onClickClient = () =>{
    this.setState({pageRender: "pageProducts"})
  };

  onClickSeller = () =>{
    this.setState({pageRender: "pageSeller"})
  };

  onClickAddProducts = () =>{
    this.setState({pageRender: "pageAddProducts"})
  };


  render() {
    const renderize = () =>{
      if(this.state.pageRender === "pageDirection"){
        return <LoginScreen functionOnClickCliente={this.onClickClient} functionOnClickSeller={this.onClickSeller}/>
      }
      else if(this.state.pageRender === "pageProducts"){
        return <ProductGrid/>
      }
      else if(this.state.pageRender === "pageSeller"){
        return <SellerPanel functionOnClickAdd={this.onClickAddProducts}/>
      }
      else if(this.state.pageRender === "pageAddProducts"){
        return <AddProduct/>
      }
    };

    return (
      <div>

        {renderize()}
        {/* <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
          </Button>
          <TextField
            label="Nome do produto"
            variant="standard"
            color="secondary"
          />
        </ThemeProvider> */}
        <p>Pronto para começar!</p>

      </div>
    );
  };
}
