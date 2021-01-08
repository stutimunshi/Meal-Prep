import React from "react";
import style from './food.module.css';

const Food = ({title, ingredients, image, source}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1><b><u>Ingredients</u></b>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            <a href = {source} target = "_blank" rel = "noopener noreferrer">
                URL 
            </a>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Food;
