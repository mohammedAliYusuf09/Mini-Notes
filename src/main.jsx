import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NoteAria } from './components/NoteAria.jsx'
import Notesstroe from './Store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notesstroe>
      <App />
    </Notesstroe>
  </React.StrictMode>,
)
