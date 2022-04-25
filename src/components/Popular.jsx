import { useEffect, useState } from 'react';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Popular() {
   
  const [popular, setPopular] = useState([]);

  useEffect(()=> {
    getPopular();
  }, []);

  const getPopular= async () => {

      const check = localStorage.getItem('popular');
      if(check){
        console.log("Local Storage");
        setPopular(JSON.parse(check));
      }else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_SPOON}&number=24`);
        const data = await api.json();
       // console.log(data);  
       console.log(data.recipes);
        setPopular(data.recipes);
        localStorage.setItem('popular', JSON.stringify(data.recipes))
      }
      
  }
  return (
    <div className="wrapper">
      <h3>Popular Dishes</h3>
      <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem"
        }}>
      {
        popular.map((recipe) => {
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

export default Popular