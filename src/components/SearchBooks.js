import React, { useState, useEffect } from 'react';

function SearchBooks(){
	const [books, setBooks]  = useState([]);

useEffect(() => {
	 console.log("se monto el componente")
	 fetch(`http://localhost:3030/api/products/`)
		.then(response => response.json())
		.then(data => {
			console.log("data")
			console.log(data)
			setBooks(data.products)})
		.catch(error => console.error(error));
}, [])

return(
		<div className="container-fluid">		
			<br/>
			<h4>Listado de Libros</h4>
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