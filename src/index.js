import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';

import Footer from './Components/Layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import DestinationIndex from './Components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { destinationAPI } from './api/destinationAPI';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ApiProvider api={destinationAPI}>

 <Header/>
 <DestinationIndex/>
 <Footer/>
 </ApiProvider>

);


