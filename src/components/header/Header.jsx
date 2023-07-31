import { faBed, faCar, faEarthAmericas, faLocationDot, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Lưu trú</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Chuyến bay</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <span>Chuyến bay + Khách sạn </span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Thuê xe </span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Địa điểm tham quan </span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi sân bay </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
