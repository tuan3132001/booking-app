import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <div className="mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="w-[1024px] text-[24px] absolute top-[850px] font-bold ">
          Tìm theo loại chỗ nghỉ ở Hà Nội
        </h1>
        <PropertyList />
        <h1 className="w-[1024px] text-[24px] absolute top-[1130px] font-bold ">
          Nhà mà khách yêu thích
        </h1>
        <FeatureProperties />
      </div>
    </div>
  );
};

export default Home;
