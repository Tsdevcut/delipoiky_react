import { useEffect, useState } from 'react';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(()=> {
    getVeggie();
  }, []);

  const getVeggie= async () => {

      const check = localStorage.getItem('veggie');
      if(check){
        console.log("Local Storage");
        setVeggie(JSON.parse(check));
      }else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_SPOON}&number=12&tags=vegetarian`);
        const data = await api.json();
       // console.log(data);  
       console.log(data.recipes);
        setVeggie(data.recipes);
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
      }
      
  }
  return (
      <div className="wrapper">
      <h3>Veggies Dishes</h3>
      <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }}>
      {
        veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
              <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="gradient"></div>
                </Link>
              </div>
            </SplideSlide>
          )
        }) 
      }
      </Splide>
    
    </div>
  )
}

export default Veggie