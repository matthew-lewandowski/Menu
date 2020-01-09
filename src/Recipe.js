import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image}) => {
    return (
        <li className={style.recipe}>
            <div className="recipe-middle">
                <img src={image} alt={title} className={style.image}/>
                <div className="recipe-inner">
                    <h1 className="title">{title}</h1>
                    <p className="calories">{calories}</p>
                </div>
            </div>
            <p className="dropdown-arrow"><i className="arrow down"></i></p>
        </li>
    );
};

export default Recipe;