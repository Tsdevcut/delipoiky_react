import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';

function Search() {
    const [theinput, setTheInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
      
        navigate('/searched/'+ theinput);
        setTheInput("");
    }
  return (
      <div className="formstyle">
          <div className="fr">
              <FaSearch></FaSearch>
            <form onSubmit={submitHandler}>
                    <input onChange={(e) => setTheInput(e.target.value)} type="text" value={theinput} />
                </form>
          </div>
      </div>
   
  )
}

export default Search