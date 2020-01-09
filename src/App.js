import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
    const APP_ID = '5b1399e5';
    const APP_KEY = '0ec2bd3d6939081f890a828d83e60719';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
                <button type="submit" className="search-button">
                    hello
                </button>
            </form>
            <div className="recipes">
                <ol className="recipe-list">
                    {recipes.map(recipe => (
                        <Recipe
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            key={recipe.recipe.label + recipe.recipe.calories}
                            ingredients={recipe.recipe.ingredients}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default App;
