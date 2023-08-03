import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div className="relative ">
      <Navbar />
      <Header />
      <Banner className="absolute" />
      <div className=" flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="w-[1024px] text-[24px] absolute top-[850px] font-bold ">
          Tìm theo loại chỗ nghỉ ở Hà Nội
        </h1>
        <PropertyList />
        <h1 className="w-[1024px] text-[24px] absolute top-[1130px] font-bold ">
          Nhà mà khách yêu thích
        </h1>
        <FeatureProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
