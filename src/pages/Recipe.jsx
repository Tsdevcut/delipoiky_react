import React, {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetail] = useState({})
    const [activeTab, setActiveTab] = useState("instructions")

    useEffect(()=> {
        fetchDetails(params.name);
    }, [params.name]);

    const fetchDetails = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY_SPOON}&cuisine=${name}`)
        const detailData = await data.json();
        setDetail(detailData) 
    }

  return (
    <div className="detailedWrapper">
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="Recipe Dell" />

        </div>
        <div className="info">
            <button onClick={() => setActiveTab("instructions")} className={activeTab === 'instructions' ? 'butt active': 'butt'} >Instructions</button>
            <button onClick={() => setActiveTab("ingredients")} className={activeTab === 'ingredients' ? 'butt active': 'butt'} >Ingredients</button>
            {activeTab === 'instructions' && (
                <div className="sum_instruct">
                    <div className="major-1" dangerouslySetInnerHTML={{__html:details.summary}}></div>
                    <div className="major-2" dangerouslySetInnerHTML={{__html:details.instructions}}></div>
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul className="ingred">
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={"ex"+ingredient.id}>{ingredient.original}</li>
                    ))                      
                    }
                </ul>
            )}
        </div>
    </div>
  )
}

export default Recipe