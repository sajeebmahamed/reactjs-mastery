import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import ThemeContext from '../Theme/ThemeContext';

const Navbar = () => {
    const { dark, toggle } = useContext(ThemeContext);
    const {dispatch} = useContext(store)
    const handleChange = (e) => {
        dispatch({ type: 'SET_KEYWORD', payload: e.target.value })
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