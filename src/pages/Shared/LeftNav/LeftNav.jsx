import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
            fetch('http://localhost:5000/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
            .catch(error=>console.log(error))
    },[])
    return (
        <div>
           <h1>All categoryyy</h1> 
          <div className='p-4'>
          {
            categories.map(category => <p key={category.id}>
                <Link className='text-decoration-none'>{category.name}</Link>


            </p>)
           }
          </div>
           
           
        </div>
    );
};

export default LeftNav;