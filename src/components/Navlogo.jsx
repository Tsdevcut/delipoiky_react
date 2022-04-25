import React from 'react';
import {Link} from 'react-router-dom';


function Navlogo() {
  return (
    <div className="nav-contain">
          <Link to={'/'}>
          <img src="/logo192.png" alt="Poiky Poiky"/>
          </Link>
        
        <div className="hsting">
            FooPoiky 
        </div>
    </div>
  )
}

export default Navlogo