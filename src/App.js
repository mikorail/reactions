import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
  constructor(){
    super();
    this.state={
      products :[]
    }
  }
  componentDidMount(){
    fetch('https://my-json-server.typicode.com/mikorail/jsonmomoa/products')
    .then(response=>response.json())
    .then((data)=>{
      this.setState({products:data})
    })
  }
  
  render() {
    return (
      <div className="row">
        <header className="App-header">
          {
            this.state.products.map((data,key)=>
            <Product className="column" judul={data.name} harga={data.price}/>
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
