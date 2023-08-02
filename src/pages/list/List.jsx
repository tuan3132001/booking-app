import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner type="list" />
    </div>
  );
};

export default List;
