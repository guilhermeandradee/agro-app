import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Posts from './components/Posts';

function App() {

  return (
    <>
        <main className='w-100 h-100-vh '>
            <Header />

            <Posts />
        </main>
    </>
  )
}

export default App
