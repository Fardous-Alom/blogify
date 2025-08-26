import React from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import Footer from './components/Footer';

function App() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Blog />
      <Footer/>
    </main>
  );
}

export default App