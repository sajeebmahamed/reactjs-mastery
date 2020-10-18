import React from 'react';
import { categories } from '../../data/categories';

const Category = ({ categorie }) => {
    console.log(categorie);
    return (
        <div>
            <p> {categorie.name} </p>
            <img src={require(`../../images/${categorie.image}`)} alt=""/>
        </div>
    );
};

export default Category;