import React from 'react';
import './scss/main.scss';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import NumbersContainer from './components/NumbersContainer';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <NumbersContainer></NumbersContainer>
      <Footer></Footer>
    </GlobalProvider>
  );
}

export default App;
