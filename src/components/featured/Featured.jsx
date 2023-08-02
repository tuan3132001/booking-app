import React from 'react';

const Featured = () => {
  return (
    <div className="w-full absolute flex justify-center  max-width-[1024px] z-[1]">
      <div className="flex space-x-[62px] ">
        <div className="relative text-white rounded-[10px] overflow-hidden ">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.2uwXZ0n9IjdCtwonqP0unwHaFD&pid=Api&P=0&h=180"
            alt=""
            className="w-[300px] object-cover h-[250px] "
          />
          <div className="absolute bottom-[30px] left-[20px]">
            <h1 className="font-bold text-[40px]">dasd</h1>
            <h2 className="font-bold text-[30px]">1</h2>
          </div>
        </div>
        <div className="relative text-white rounded-[10px] overflow-hidden">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.UnXqZZzJXkeaY9qPedQIewHaE8&pid=Api&P=0&h=180"
            alt=""
            className="w-[300px] object-cover h-[250px]"
          />
          <div className="absolute bottom-[30px] left-[20px]">
            <h1 className="font-bold text-[40px]">dasd</h1>
            <h2 className="font-bold text-[30px]">1</h2>
          </div>
        </div>
        <div className="relative text-white rounded-[10px] overflow-hidden">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.nR4rEgys-8xe9tavBk-9WQHaEU&pid=Api&P=0&h=180"
            alt=""
            className="w-[300px] object-cover h-[250px] "
          />
          <div className="absolute bottom-[30px] left-[20px]">
            <h1 className="font-bold text-[40px]">dasd</h1>
            <h2 className="font-bold text-[30px]">1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
