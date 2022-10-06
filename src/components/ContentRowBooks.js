import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let booksInDB = {
    title: 'Libros en Base de Datos',
    color: 'primary', 
    cuantity: 211,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Usuarios en Base de Datos', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Categorias en Base de Datos' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [booksInDB, totalAwards, actorsQuantity];

function ContentRowBooks(){
    return (
    
        <div className="row">
            
            {cartProps.map( (book, i) => {

                return <SmallCard {...book} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowBooks;