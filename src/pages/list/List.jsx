import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation();
  const [destination] = useState(
    location.state.destination,
  );
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header />
      <Banner type="list" />
      <div className="flex justify-center mt-[20px]">
        <div className="w-full max-w-[1024px] flex gap-[20px]">
          <div className="flex-[1] bg-[#febb02] p-[10px] rounded-[10px] sticky top-[10px] h-[max-content]">
            <h1 className="text-[20px] text-[#555] mb-[10px] font-bold ">
              Tìm kiếm{' '}
            </h1>
            <div className="flex flex-col gap-[5px] mb-[10px]">
              <label className="text-[14px]">
                Điểm đến
              </label>
              <input
                type="text"
                placeholder={destination}
                className="h-[40px] border-none p-[5px]"
              />
            </div>
            <div>
              <label className="text-[14px]">
                Ngày nhận phòng
              </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-[40px] bg-white p-[5px] flex items-center cursor-pointer"
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} 
                            - ${format(
                              date[0].endDate,
                              'MM/dd/yyyy',
                            )}  `}</span>
              {openDate && (
                <DateRange
                  onChange={(item) =>
                    setDate([item.selection])
                  }
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="flex flex-col gap-[5px] mb-[10px] mt-[20px]">
              <label>Tùy chọn</label>
              <div className="p-[10px]">
                <div className="flex justify-between mb-[10px] text-[#555] text-[14px]">
                  <span>
                    Giá thấp nhất <small>(mỗi đêm) </small>
                  </span>
                  <input
                    type="number"
                    className="w-[50px]"
                  />
                </div>
                <div className="flex justify-between mb-[10px] text-[#555] text-[14px]">
                  <span>
                    Giá cao nhất <small>(mỗi đêm) </small>
                  </span>
                  <input
                    type="number"
                    className="w-[50px]"
                  />
                </div>
                <div className="flex justify-between mb-[10px] text-[#555] text-[14px]">
                  <span>Người lớn</span>
                  <input
                    type="number"
                    placeholder={options.adult}
                    min={1}
                    className="w-[50px]"
                  />
                </div>
                <div className="flex justify-between mb-[10px] text-[#555] text-[14px]">
                  <span>Trẻ em</span>
                  <input
                    type="number"
                    placeholder={options.children}
                    min={0}
                    className="w-[50px]"
                  />
                </div>
                <div className="flex justify-between mb-[10px] text-[#555] text-[14px]">
                  <span>Phòng</span>
                  <input
                    type="number"
                    placeholder={options.room}
                    min={1}
                    className="w-[50px]"
                  />
                </div>
              </div>
              <button className="text-white bg-[#006ce4] rounded-[5px] w-full h-[40px] font-[500] text-[20px] cursor-pointer">
                Tìm
              </button>
            </div>
          </div>
          <div className="flex-[3]">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
