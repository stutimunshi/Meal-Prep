import React from "react";

const Food = ({title, ingredients, image, source}) => {
    return(
        <div>
            <h1>{title}</h1>
            <o1><b><u>Ingredients</u></b>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            <a href = {source} target = "_blank" rel = "noopener noreferrer">
                URL 
            </a>
            <img src={image} alt=""/>
        </div>
    );
}

export default Food;
