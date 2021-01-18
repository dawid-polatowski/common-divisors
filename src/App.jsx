import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
      <GlobalProvider>
        <Header />
        <Content />
        <Footer />
      </GlobalProvider>
    </div>
  )
}

export default App
