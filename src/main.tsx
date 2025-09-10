import React from 'react'
import { createRoot } from 'react-dom/client'
import Site from './index'

const el = document.getElementById('root')!
createRoot(el).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
)
