import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import {

  RouterProvider,
} from "react-router-dom";


import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='font-Briem max-w-7xl mx-auto'>
    <React.StrictMode>

      <FirebaseProvider>

        <QueryClientProvider client={queryClient}>

          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>

        </QueryClientProvider>

      </FirebaseProvider>

    </React.StrictMode>,
  </div>
)
