import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Router.jsx';
import { PostagensProvider } from './components/PostagensProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PostagensProvider>
      <MainRoutes />
    </PostagensProvider>
  </BrowserRouter>,
)
