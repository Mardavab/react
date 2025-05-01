import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserAPP} from './UserApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserAPP/>
    </BrowserRouter>
    
  </StrictMode>,
)
