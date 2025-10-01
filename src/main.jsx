import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './router/RouterApp'
import { LanguageProvider } from "./context/LanguageContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterApp />
    </LanguageProvider>
  </StrictMode>,
)
