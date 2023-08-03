import { Button } from 'antd';
import React from 'react';

const MailList = () => {
  return (
    <div className="w-full mt-[50px] bg-[#00224F] text-white flex flex-col items-center gap-[20px] p-[50px] absolute top-[1600px] ">
      <h1 className="text-[24px]">
        Tiết kiệm thời gian và tiền bạc{' '}
      </h1>
      <span className="text-[#BDBDBD] text-[16px]">
        Hãy đăng kí và chúng tôi sẽ gửi những ưu đãi tốt
        nhất cho bạn
      </span>
      <div>
        <input
          className="w-[315.88px] h-[48px] p-[10px] border-none bg-white mr-[10px] rounded-[5px]"
          type="text"
          placeholder="Địa chỉ e-mail của bạn"
        />
        <Button
          type="primary"
          className="h-[48px] w-[129.32px] bg-[#006CE4] font-[500] border-none cursor-pointer"
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default MailList;
