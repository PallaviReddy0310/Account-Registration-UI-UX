import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function RootLayout(){
  
  return (
    <div className='root'>
      {/*Navigation Bar*/}
      <NavBar />

      {/*Content*/}
      <Outlet />

      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default RootLayout;