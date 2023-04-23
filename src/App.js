import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './SampleApp/RootLayout/RootLayout';
import Home from './SampleApp/Home/Home';
import Signin from './SampleApp/Signin/Signin';
import Register from './SampleApp/Register/Register';

function App() {

  // create browser router function
  const router= createBrowserRouter([
    {
    path:'/',
    element:<RootLayout />,
    children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/signin',
      element:<Signin />
    },
    {
      path:'/register',
      element:<Register />
    }
  ]
}
]);
  
  return(
  <div className='app'>
    <RouterProvider router={router} />
    </div>
  )
}

export default App;