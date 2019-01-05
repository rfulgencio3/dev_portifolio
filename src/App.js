// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Footer
import MyFooter from './components/footer/footer'
// Importando o component Main
import Main from './main'
// Importando o Toastify
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <MyFooter />
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}

export default App;