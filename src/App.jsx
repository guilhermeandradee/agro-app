import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  return (
    <>
        <main className='w-100 h-100-vh d-flex flex-column'>
            <Header />
            <div className='w-100 pt-5 d-flex justify-content-center align-items-center'>
              <a target='_blank' href='https://www.youtube.com/watch?v=jFXf_djogo4&feature=youtu.be' className='text-center text-black  m-0'>Link: https://www.youtube.com/watch?v=jFXf_djogo4&feature=youtu.be</a>
            </div>
            <Posts />

            <Footer />
        </main>
    </>
  )
}

export default App
