import React from 'react';
import { categories } from '../../data/categories';
import Category from './Category';

const VolunteerCategories = () => {
    console.log(categories);
    return (
        <div>
            <h1>main</h1>
            { 
                categories.map(categorie => <Category categorie={categorie}></Category>)
            }
        </div>
    );
};

export default VolunteerCategories;