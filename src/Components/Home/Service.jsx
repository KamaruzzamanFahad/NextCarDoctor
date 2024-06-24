import React from 'react';
import services from '../../../public/services.json'
import Image from 'next/image';
const Service = () => {
  return (
    <div>
      <div className='text-center py-10'>
        <h2>Service</h2>
        <h1>Our Service Area</h1>
      </div>

      <div className='flex flex-wrap gap-10'>
        {
          services.map((item) => (
            <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <Image width={1000} height={1000}
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Price: {item.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Service;