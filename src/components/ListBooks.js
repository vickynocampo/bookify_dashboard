import React, { useState, useEffect } from 'react';

function SearchBooks(){
const [books, setBooks]  = useState([]);

useEffect(() => {
	 console.log("se monto el componente")
	 fetch(`http://localhost:3030/api/products/`)
		.then(response => response.json())
		.then(data => {
			console.log("data de libros")
			console.log(data)
			setBooks(data.products)})
		.catch(error => console.error(error));
}, [])

return(
		<div className="container-fluid">		
			<br/>
				<h4>Total de Libros {books.length} </h4>
				<hr/>
				<br/>
				<ul>
					{books.length === 0 && <p>Cargando...</p>}
					{
						books.map((book, i) => {
							return (
								<li key={i}>
									<h5>{book.name}</h5>			
									<h6>{book.description}</h6>
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={book.front} alt="Portada"/>
										
									<br/>
								</li>
							)			
						})
					}					
				</ul>		
		</div>
	)
}

export default SearchBooks;