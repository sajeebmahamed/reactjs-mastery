import React from 'react';

const Navbar = ({ setKeyword }) => {
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <div className="nav-bar">
            <span> Shop </span>
            <input placeholder="Search" onChange={handleChange}/>
        </div>
    );
};

export default Navbar;