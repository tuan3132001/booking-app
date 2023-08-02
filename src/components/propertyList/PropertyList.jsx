import React from 'react';

const PropertyList = () => {
  return (
    <div className="absolute w-full max-w-[1024px] flex justify-between gap-[20px] top-[900px] ">
      <div className="rounded-[10px] overflow-hidden cursor-pointer flex-[1] ">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uQVNaCMS9q5-UWXUHe1jmQHaE7&pid=Api&P=0&h=180"
          alt=""
          className="w-full h-[150px] object-cover "
        />
        <div>
          <h1 className="text-[16px] font-bold">
            Khách sạn
          </h1>
          <h2 className="text-[14px] text-[#474747]">
            2335 khách sạn{' '}
          </h2>
        </div>
      </div>
      <div className="rounded-[10px] overflow-hidden cursor-pointer flex-[1] ">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uQVNaCMS9q5-UWXUHe1jmQHaE7&pid=Api&P=0&h=180"
          alt=""
          className="w-full h-[150px] object-cover "
        />
        <div>
          <h1 className="text-[16px] font-bold">Căn hộ</h1>
          <h2 className="text-[14px] text-[#474747]">
            233 căn hộ{' '}
          </h2>
        </div>
      </div>
      <div className="rounded-[10px] overflow-hidden cursor-pointer flex-[1]">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uQVNaCMS9q5-UWXUHe1jmQHaE7&pid=Api&P=0&h=180"
          alt=""
          className="w-full h-[150px] object-cover "
        />
        <div>
          <h1 className="text-[16px] font-bold">
            Biệt thự{' '}
          </h1>
          <h2 className="text-[14px] text-[#474747]">
            1456 biệt thự{' '}
          </h2>
        </div>
      </div>
      <div className="rounded-[10px] overflow-hidden cursor-pointer flex-[1] ">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uQVNaCMS9q5-UWXUHe1jmQHaE7&pid=Api&P=0&h=180"
          alt=""
          className="w-full h-[150px] object-cover "
        />
        <div>
          <h1 className="text-[16px] font-bold">Nhà gỗ </h1>
          <h2 className="text-[14px] text-[#474747]">
            144 nhà gỗ{' '}
          </h2>
        </div>
      </div>
      <div className="rounded-[10px] overflow-hidden cursor-pointer flex-[1] ">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.uQVNaCMS9q5-UWXUHe1jmQHaE7&pid=Api&P=0&h=180"
          alt=""
          className="w-full h-[150px] object-cover "
        />
        <div>
          <h1 className="text-[16px] font-bold">
            Nhà khách{' '}
          </h1>
          <h2 className="text-[14px] text-[#474747]">
            239 nhà khách{' '}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
