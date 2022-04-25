import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import { Link, useParams} from "react-router-dom";


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    
    useEffect(()=> {
        getCuisine(params.type);
    }, [params.type]);

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_SPOON}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results) 
    }
  return (
    <div className="grid">
        {cuisine.map((item) => {
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
  )
}

export default Cuisine