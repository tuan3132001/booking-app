import React from 'react';

const SearchItem = () => {
  return (
    <div className="border border-gray-300 p-[10px] rounded-[5px] flex justify-between gap-[20px] mb-[20px] ">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/479421102.webp?k=98a95b46777bcefa2128f150bea70799ed47db464e818d921aaee3dd83a129f3&o="
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-[10px] flex-[2]">
        <h1 className="text-[20px] text-[#006CE4]">
          Casa Portuguesa Prata
        </h1>
        <span className="text-[12px]">
          Cách trung tâm 450m
        </span>
        <span className="text-[12px] text-[#008234] bg-[#F1FEF6] w-[max-content] p-[3px] rounded-[5px] ">
          Gần ga tàu điện ngầm
        </span>
        <span className="text-[12px] font-bold ">
          Offering air-conditioned rooms in the Hoan Kiem
          district of Hanoi
        </span>
        <span className="text-[12px]">
          Eintire studio · 1 bathroom · 21m² 1 full bed
        </span>
        <span className="text-[12px] text-[#008234] font-bold">
          Free cancellation
        </span>
        <span className="text-[12px] text-[#008234]">
          you can cancel later, so lock in this great price
          today!
        </span>
      </div>
      <div className="flex-[1] flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-[500]">Tuyệt vời</span>
          <button className="bg-[#003B95] text-[white] text-[16px] w-[32px] h-[32px] rounded-[5px] p-[5px] font-bold border-none">
            8.9
          </button>
        </div>
        <div className="items-end flex flex-col gap-[5px]">
          <span className="text-[24px]">123VND</span>
          <span className="text-[12px] text-gray-500">
            bao gồm thuế và phí
          </span>
          <button className="h-[36px] w-[97.53px] bg-[#006Ce4] text-white rounded-[5px] text-[14px] cursor-pointer font-bold border-none">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
