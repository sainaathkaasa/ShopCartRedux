import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import AppRouter from './Router/AppRouter'
import { Provider } from 'react-redux'
import  {store} from './dux/Store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
)
