import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Messages from './Messages.jsx'
import { Warning } from './Messages.jsx'
import { FavoriteFoods } from './FavoriteFoods.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteFoods />
    <Messages.greeting />
    <Messages.goAway />
    <Messages />
    <Warning />
    <App />
  </StrictMode>,
)
