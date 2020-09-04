import React from "react";
import axios from "axios";
import styled from "styled-components";
import HeaderFilter from "./HeaderFilter"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// MATERIAL UI
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//MATERIAL UI ICON
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//tema
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

// styled

const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  margin-left: 1em;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    align-content: center;
    justify-items: center;    
    width: 60vw;
  }

  
`

const CardContainer = styled.div`
  margin-bottom: 1em;
  width: 50vw;

  @media (min-width: 600px) {
    width: 15em;
  }
`

export default class ProductGrid extends React.Component {

  state = {
    products: [],
    filters: {
      minValue: 0,
      maxValue: Infinity,
    },
    searchText: "",
    category: ""
  }

  inputText = (event) =>{
    this.setState({searchText: event.target.value})
  };

  updateFilter = (newValueFilter) =>{
    this.setState({filters: {...this.state.filters, ...newValueFilter}})
  };

  category = (event) =>{
    this.setState({cateory: event.target.value})
  };


  filterProducts = () =>{
    const newProducts = this.state.products
    const filteredProducts = newProducts.filter(product =>{
      return product.name.toLowerCase().indexOf(this.state.searchText.toLowerCase())> -1
    }).filter(product =>{
      return product.price < (this.state.filters.maxValue || Infinity)
    }).filter(product =>{
      return product.price > (this.state.filters.minValue || 0)
    }).filter(product =>{
      return product.description.toLowerCase().indexOf(this.state.searchText.toLowerCase())> -1
    })
    // .filter(product =>{
    //   return product.category === (this.state.category)
    // })

    return filteredProducts
  };

  getProducts = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products")
    .then ( (response) => {
      this.setState({products:response.data.products})
    })
    .catch ( (error) => {
      alert("Erro ao recuperar todos os produtos:", error, "Reinicie a página!")
    })
  }

  componentDidMount = () => {
    this.getProducts()
  }


  render() {

    return (
      <CardsGrid>
        <HeaderFilter stateProducts={this.state.products} onChangeFilter={this.updateFilter}
          searchTitle={this.state.searchText} changeSearch={this.inputText} function={this.filterProducts}/>
        <ThemeProvider theme={theme}>
          {this.filterProducts().map ( (item) => {
              return (
          <CardContainer>
            <Card>
              <CardActionArea>

                <CardMedia
                  component="img"
                  src={item.photos}
                  alt={item.name}
                  height="140"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
            
                  <Typography variant="caption" display="inline" variant="subtitle2" >
                    R$ 
                  </Typography>
                      
                  <Typography variant="h6" display="inline">
                  {item.price}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    Pague no {item.paymentMethod} em até <strong>{item.installments}x</strong>
                  </Typography >
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                  
                </CardContent>
  
              </CardActionArea>

              <CardActions>
                <Button startIcon={<ShoppingCartIcon />}size="small" color="secondary">
                  Adicionar ao carrinho
                </Button>
              </CardActions>
            </Card>
          </CardContainer>
              )
              })}
        </ThemeProvider>
    </CardsGrid>
    )
  }}
