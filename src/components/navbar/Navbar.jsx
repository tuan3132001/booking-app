import React from 'react'
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo" style={{ fontSize: "25px", fontWeight: "bold" }}>Booking.com</span>
                <div className="navItems">
                    <p style={{ fontWeight: "bolder" }}>Đăng chỗ nghỉ quý vị </p>
                    <button className="navButton ">Đăng kí</button>
                    <button className="navButton">Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
