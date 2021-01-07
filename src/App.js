import React, { useEffect, useState} from "react";
import Food from "./Food"
import './App.css';

const App = () => {
  const API_ID = "1d2d9dca"
  const API_KEY = "af7a6021e072d1ac2b7463b132cf1efa";
  // const API_KEY = "97ca8d43e4a249c08d36675136e074c0"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(``)

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    // const recipeName = e.target.elements.recipeName.value;
    // e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    // const api_call = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=1&query=${query}`);
    // console.log(recipeName)

    const results = await api_call.json();
    // this.setState({ recipes: results.recipes })
    // console.log(this.state.recipes)
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
          <input className="search-button" type="text" value = {search} onChange ={searchUpdate}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <header className="App-header">
          <h1 className="App-title">Welcome to Recipe Roulette!</h1>
        </header>
        {recipes.map(food => (
          <Food title = {food.recipe.label} totalTime = {food.recipe.totalTime} image = {food.recipe.image} ingredients = {food.recipe.ingredients} source = {food.recipe.url}/>
          // <Food title = {Food.recipe.label} totalTime = {Food.recipe.totalTime} image = {Food.recipe.image} />
        ))}
      </div>
    );
}

export default App;
