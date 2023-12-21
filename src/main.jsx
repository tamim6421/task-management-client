import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router}>
   </RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
  </div>
)
