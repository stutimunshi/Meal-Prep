import React, { useEffect, useState} from "react";
import Food from "./Food"
import './App.css';

const App = () => {
  const API_ID = "1d2d9dca"
  const API_KEY = "af7a6021e072d1ac2b7463b132cf1efa";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipe();
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const getRecipe = async () => {

    const api_call = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);


    const results = await api_call.json();

    setRecipes(results.hits);
    console.log(results.hits);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const searchUpdate = e => {
    setSearch(e.target.value)
  }
    return (
      <div className="App">
        <form onSubmit = {getSearch} className="search-form">
          <input 
            className="search-bar" 
            type="text" 
            value = {search} 
            onChange ={searchUpdate}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <header className="App-header">
          <h1 className="App-title">Welcome to Recipe Roulette!</h1>
        </header>
        <div className="recipes">
        {recipes.map(food => (
          <Food 
            title = {food.recipe.label} 
            image = {food.recipe.image} 
            ingredients = {food.recipe.ingredients} 
            source = {food.recipe.url}
          />

        ))}
        </div>
      </div>
    );
}

export default App;
