import React from 'react';

const PropertyList = () => {
  return (
    <div className="absolute w-full max-w-[1024px] flex justify-between gap-[20px] top-[900px] z-[1]">
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
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
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
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
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
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
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
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o="
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
