import React, { useEffect, useState } from 'react';

function SearchBooks(){

	const [books, setbooks]  = useState([]);
	const [keyword, setKeyword] = useState("ACTION");
	const [search, setSearch] = useState("")

	useEffect( () => {
		console.log("se monto el componente")
		fetch(`http://localhost:3030/api/products/`)
		// http://localhost:3030/api/products/
		.then(response => response.json())
		.then(data => {
			console.log("data")
			console.log(data)
			setbooks(data.Search)
		})
		.catch(error => console.error(error));
	}, [keyword])

	// const handlerSubmit = (e)=> {
	// 	e.preventDefault();
	// 	setKeyword(search);
	// }

	// const handleChange = (e)=>{
	// 	setSearch(e.target.value)
	// }

	// // Credenciales de API
	// const apiKey = 'a9d996d6'; // Intenta poner cualquier cosa antes para probar

	return(
		<div className="container-fluid">
		
		</div>
	)
}

export default SearchBooks;