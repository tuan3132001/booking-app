import React, { useState } from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
const Banner = () => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    return (
        <div className='banner'>
            <img className='bannerImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/2880x868/246996410.jpeg?k=287d9d13a66a9f43bb033d9eae275b0f68cea77f9e86a40de6cdf5602c35aa56&o=" alt="" />
            <div className="bannerContent">
                <h1>Lưu trú thoải mái.<br /> Thỏa chí ngao du.</h1>
                <p>Khám phá cabin, nhà ven biển & hơn nữa  </p>
                <button className="bannerButton">Tìm nhà nghỉ dưỡng </button>
                <div className='bannerSearch'>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faBed} className='searchIcon' />
                        <input type='text' placeholder='Bạn muốn đến đâu?' className='searchInput' />
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='searchIcon' />
                        <span onClick={() => setOpenDate(!openDate)} className='searchText'>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} 
                            - ${format(date[0].endDate, "MM/dd/yyyy")}  `}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faPerson} className='searchIcon' />
                        <span className='searchText'>
                            {`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}
                        </span>
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Người lớn</span>
                                <button className="counterButton">-</button>
                                <span className="counterNumber">1</span>
                                <button className="counterButton">+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Trẻ em</span>
                                <button className="counterButton">-</button>
                                <span className="counterNumber">1</span>
                                <button className="counterButton">+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Phòng</span>
                                <button className="counterButton">-</button>
                                <span className="counterNumber">1</span>
                                <button className="counterButton">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="searchItem">
                        <button className="searchButton">Tìm</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
