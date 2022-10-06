import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowBooks(){
   const [books, setBooks]  = useState([]);
   useEffect(() => {
         console.log("se monto el componente")
         fetch(`http://localhost:3030/api/products/`)
            .then(response => response.json())
            .then(data => {
                console.log("data de libros")
                console.log(data)
                setBooks(data)})
            .catch(error => console.error(error));
    }, [])

  const [categories, setCategories]  = useState([]);
	
  useEffect(() => {
     console.log("se monto el componente")
     fetch(`http://localhost:3030/api/products/`)
      .then(response => response.json())
      .then(data => {
        console.log("data de categorias")
        console.log(data)
        setCategories(data.countByCategory)})
      .catch(error => console.error(error));
  }, [])

  const [users, setUsers]  = useState([]);
	
  useEffect(() => {
       console.log("se monto el componente")
       fetch(` http://localhost:3030/api/users`)
          .then(response => response.json())
          .then(data => {
              console.log("data de usuarios")
              console.log(data)
              setUsers(data)})
          .catch(error => console.error(error));
  }, [])

  let cartProps = [books, categories, users];

  console.log("cartProps")
  console.log(cartProps)
  return (
        <div className="row">
            {cartProps.map( (book, i) => {
            return <SmallCard {...book} key={i}/>
            })}
        </div>
    )
}

export default ContentRowBooks;