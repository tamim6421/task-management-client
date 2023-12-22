import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
     <HelmetProvider>
     <QueryClientProvider client={queryClient}>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router}>
   </RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
    </QueryClientProvider>

     </HelmetProvider>
   
   
  </div>
)
