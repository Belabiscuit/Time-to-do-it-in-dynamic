
import './App.css'

import React, { Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions';
const pricingPromise=fetch('PricingData.json').then(res=>res.json())
const App = () => {
  return (
    <>
 <header>
   <Navbar></Navbar>
 </header>
<main className='bg-white'>
  <Suspense fallback={<span className="loading loading-ball loading-md"></span>}>
   <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
  </Suspense>
</main>
 </>
  );
  
};

export default App;