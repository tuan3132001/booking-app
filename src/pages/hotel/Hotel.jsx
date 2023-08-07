import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393199214.jpg?k=fb0fa2ca2b504f71fa1cdb3520ac98c4c44040daab0275b3eaefdc71bd288fde&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393794058.jpg?k=43e662f4db69e1c1d12e3771c36ee85c0444867c093b9512d8d48bbcf056b26f&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393199509.jpg?k=078f5c5d362a2d6eebb23de1d9ac3e0ce9794319099bfe5fb016726968f539df&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393179558.jpg?k=9b6deeaf2e2c58b56120f4df8d43f8d5f1689bd1b591fada879de1884eb80440&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393199221.jpg?k=f67e0641057ed89bb916168cbbc086c2c427e3a98869fb08720df5e58f8f250b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/393180788.jpg?k=2ac6e4dd0ef681dc5023063da4591b81e7e3a59f89bd442ab275e58cb97061ca&o=&hp=1',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber =
        slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header />
      <Banner type="list" />
      <div className="flex justify-center mt-[20px] flex-col items-center ">
        {open && (
          <div className="sticky top-[0] left-[0] w-[100vw] h-[100vh] bg-gray z-[999] flex items-center">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-[20px] right-[20px] text-[30px] text-[lightgray] cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="m-[20px] text-[lightgray] cursor-pointer text-[30px]"
              onClick={() => handleMove('l')}
            />
            <div className="w-full h-full flex justify-center items-center ">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="w-[80%] h-[80vh]"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="m-[20px] text-[lightgray] cursor-pointer text-[30px]"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="w-full max-w-[1024px] flex flex-col gap-[10px] relative">
          <button className="absolute top-[10px] right-[0] bg-[#006AB7] text-white h-[36px] w-[89.29px] text-[14px] font-bold border-none">
            Đặt ngay
          </button>
          <h1 className="text-[#262626] text-[24px] font-bold">
            Hanoi Kingly Hotel
          </h1>
          <div className="text-[12px] flex items-center gap-[10px]">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#006Ce4]"
            />
            <span>
              {' '}
              8A Ly Thai To, Hoan Kiem, Quận Hoàn Kiếm,
              10000 Hà Nội, Việt Nam –
            </span>
          </div>
          <span className="text-[14px] text-[#0071C2] font-bold">
            Vị trí xuất sắc - hiển thị bản đồ
          </span>
          <span className="text-[#008009] font-[500]">
            The hotel provides car, motorbike and bicycle
            rental, as well as visa services.
          </span>
          <div className="flex flex-wrap justify-between">
            {photos.map((photo, i) => (
              <div key={photos.index} className="w-[33%]">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-[20px] mt-[20px]">
            <div className="flex-[3]">
              <h1 className="text-[20px] font-bold ">
                Nằm ngay trung tâm Hà Nội
              </h1>
              <p className="text-[14px] text-[#262626] mt-[20px]">
                Located along a quiet street in the Old
                Quarter, Hanoi Kingly Hotel is a 2-minute
                walk from Hoan Kiem Lake and Thang Long
                Water Puppet Theatre. It offers spectacular
                views from its rooftop and free Wi-Fi. Hanoi
                Kingly Hotel is a 5-minute walk from Hanoi s
                famous Opera House. It is only 1 km from
                Dong Xuan Market. The beautiful rooms
                feature wooden flooring and antique
                furniture. Each air-conditioned room is
                equipped with satellite TV and a minibar.
                Private bathrooms come with a bathtub. The
                hotel provides car, motorbike and bicycle
                rental, as well as visa services. Laundry
                and currency exchange are available. Buffet
                breakfast is served at the hotel. City views
                accompany meals and drinks at the restaurant
                and bar. More dining options are just a
                stroll away from Hanoi Kingly Hotel.
              </p>
            </div>
            <div className="flex-[1] bg-[#E4F4FF] text-[#262626] p-[20px] flex flex-col gap-[20px]">
              <h1 className="text-[16px] text-[#262626] font-bold">
                Hoàn hảo cho 9 đêm ở!
              </h1>
              <span className="text-[13px] text-[#262626]">
                <FontAwesomeIcon icon={faLocationDot} />
                Nằm ngay trung tâm Hà Nội, khách sạn này có
                điểm vị trí tuyệt vời 9,5
              </span>
              <h2 className="font-[300]">
                <b className="font-bold">3.455.000VND</b> (9
                đêm)
              </h2>{' '}
              <button className="bg-[#006AB7] text-white w-[283.39px] h-[36px] text-[14px] font-bold border-none ">
                Đặt ngay
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
