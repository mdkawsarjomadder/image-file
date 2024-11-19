import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider, { AppContext } from './Context/AppContaxt.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </BrowserRouter>,
)