import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    const{id,name,price,billing,features,popular}=pricing;

    return (
        <div className='border-2 rounded-2xl bg-red-800 hover:bg-red-950 duration-500'>
            <div className=''>
            <h2 className='text-3xl text-center'>{name}</h2>
            <h2 className='text-3xl text-center'>{billing}</h2>
         </div>
         <div className='py-4'>
         <h2 className='text-4xl text-center bg-cyan-900 border-2 border-black rounded-2xl py-1'>BDT:{price} TK</h2>
         </div>
         <div>
            {
                features.map(feature=>
                <div className='flex p-3'>
                   <CircleCheckBig className='mr-2'></CircleCheckBig>
                  <p>{feature}</p>
                </div>
                )
            }
         </div>

        </div>
     
    
    );
};

export default PricingCard;