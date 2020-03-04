import React, { useEffect } from 'react';
import './scss/main.scss';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  let managePanel;

  const onScroll = e => {    
    managePanel.scrollLeft = e.target.scrollLeft;

    let offset = e.target.offsetWidth - e.target.clientWidth;
    managePanel.style.marginRight = `${offset}px`;   
  };

  useEffect(() =>{
    managePanel = document.getElementById('manage-panel');

    let displayPanel = document.getElementById('display-panel');   
    displayPanel.onscroll = onScroll;
  }, []);

  return (
    <GlobalProvider>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </GlobalProvider>
  );
}

export default App;
