import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './productz/products';
const App = () => {
  const firstName = "JJ"; 

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Product Details</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <Image />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <Name />
              </div>
              <div className="mb-2">
                <Price />
              </div>
              <div className="mb-2">
                <Description />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700">
            Hello, {firstName ? firstName : 'there'}!
          </p>
          {firstName && <Image />}
        </div>
      </div>
    </div>
  );
};

export default App;
