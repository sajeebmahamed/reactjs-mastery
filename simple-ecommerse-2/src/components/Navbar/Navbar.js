import React from 'react';
import ThemeContext from '../Theme/ThemeContext';

const Navbar = ({ setKeyword }) => {
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        // <ThemeContext.Consumer > {
        //     value => 
                
        //             <div className="nav-bar">
        //                 <span> My Shop {value.dark ? 'dark' : 'light'} </span>
        //                 <input type="text" placeholder="search" onChange={handleChange} />
        //             </div>
                
        // }
            
        // </ThemeContext.Consumer>

        <div className="nav-bar">
            <span> My Shop  </span>
            <input type="text" placeholder="search" onChange={handleChange} />
        </div>

    );
};

export default Navbar;