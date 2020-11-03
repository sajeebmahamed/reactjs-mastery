import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setKeyword } from '../../store/action';
import ThemeContext from '../Theme/ThemeContext';

const Navbar = () => {
    const { dark, toggle } = useContext(ThemeContext);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(setKeyword(e.target.value))
    }
    return (

        <div className="nav-bar">
            <span> My Shop {dark ? 'dark' : 'light'} </span>
            <input type="text" placeholder="search" onChange={handleChange} />
            <button onClick={toggle}> Change Theme </button>

            <div className="">
                <Link to="/"> Home </Link>
                <Link to="/checkout"> Checkout </Link>
            </div>
        </div>


        // <div className="nav-bar">
        //     <span> My Shop  </span>
        //     <input type="text" placeholder="search" onChange={handleChange} />
        // </div>

    );
};

export default Navbar;