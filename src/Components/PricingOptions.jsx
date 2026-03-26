import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {

   const pricingData=use(pricingPromise)
     

    return (
        <div className='p-5'>
            <h2 className='text-5xl mb-3 text-center text-black'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2
            '>
                {
                    pricingData.map((pricing,index)=><PricingCard key={index} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;