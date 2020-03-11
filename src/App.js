import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { GameDex } from './GameDex.js';
import { Footer } from './Footer';
import { Create } from './Create';



export default class App extends React.Component {
  constructor() {
    super()
    console.log("test")
  }
  
  render() {

    return (
      <div className="App">

        <Header />
        <Footer />
        <GameDex />
        <Create />
      </div>
    )
  }
}