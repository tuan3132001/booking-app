import React from 'react';
import './Banner.css';
import { checkPropTypes } from 'prop-types';
import Search from '../search/Search';

const Banner = ({ type }) => {
  return (
    <div className="banner">
      {type !== 'list' && (
        <>
          <img
            className="bannerImg"
            src="https://q-xx.bstatic.com/xdata/images/xphoto/2880x868/246996410.jpeg?k=287d9d13a66a9f43bb033d9eae275b0f68cea77f9e86a40de6cdf5602c35aa56&o="
            alt=""
          />
          <div className="bannerContent">
            <h1>
              Lưu trú thoải mái.
              <br /> Thỏa chí ngao du.
            </h1>
            <p>Khám phá cabin, nhà ven biển & hơn nữa </p>
            <button className="bannerButton">
              Tìm nhà nghỉ dưỡng{' '}
            </button>
          </div>
          <Search />
        </>
      )}
    </div>
  );
};

Banner.propTypes = {
  type: checkPropTypes.string, // Ở đây, chúng ta xác định 'type' prop là một string bắt buộc.
};

export default Banner;
