import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <main className='w-100 h-100-vh d-flex flex-column'>
            <Header />

            <Posts />

            <Footer />
        </main>
    </>
  )
}

export default App
