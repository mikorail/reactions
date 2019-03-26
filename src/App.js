import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from "./Product";

class App extends Component {
  constructor(){
    super();
    this.state={
      products :[
        {
          judul : 'Powerbank 1',
          harga : '100000'
        },
        {
          judul : 'Powerbank 2',
          harga : '200000'
        },
        {
          judul : 'Kabel data  USB3',
          harga : '30000'
        }
      ]
    }
  }
  render() {
    return (
      <div className="row">
        <header className="App-header">
          {
            this.state.products.map((data,key)=>
            <Product className="column" judul={data.judul} harga={data.harga}/>
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
