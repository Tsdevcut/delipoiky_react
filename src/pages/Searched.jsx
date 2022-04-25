import React, {useState, useEffect} from 'react';
import { useParams, Link} from "react-router-dom";

function Searched() {

    const [searchedRecipe, setSearchRecipe] = useState([]);
    let params = useParams();

    useEffect(()=> {
        getSearch(params.search);
        console.log("WE SEARCH HERE");
        console.log(params.search);
    }, [params.search]);

    const getSearch = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_SPOON}&query=${name}`)
        const recipes = await data.json();
        setSearchRecipe(recipes.results) 
    }
    
  return (
    <div>
        <h3>Search : {params.search}</h3>
         <div className="grid">
            {searchedRecipe.map((item) => {
                return (
                    <div className="gcard" key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Searched