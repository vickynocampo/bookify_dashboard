import React, { useState, useEffect } from 'react';

function SearchBooks(){
	const [books, setBooks]  = useState([]);
	const [keyword, setKeyword] = useState("");
	const [search, setSearch] = useState("");

	useEffect( () => {
		console.log("se monto el componente para search")
		fetch(`http://localhost:3030/api/products/search/${keyword}`)
		.then(response => response.json())
		.then(data => {
			console.log("data")
			console.log(data)
			setBooks(data.books)
		})
		.catch(error => console.error(error));
	}, [keyword])

	const handlerSubmit = (e)=> {
		e.preventDefault();
		setKeyword(search);
	}

	const handleChange = (e)=>{
		setSearch(e.target.value)
	}

	return(
		<div className="container-fluid">
			{		
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">					
							<form onSubmit={handlerSubmit}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" value={search} onChange={handleChange} />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Libros para la palabra: {keyword}</h2>
						</div>
					{
							books && books.map((books, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{books.title}</h5>
												<br/>
												<p>Precio: $ {books.price}.-</p>
												<p>Stock: {books.stock}</p>
											</div>
											<div className="card-body">
												<div className="text-center">												
														<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '70%', height: '80%', objectFit: 'cover' }}  src={books.image} alt="Portada"/>
																
												</div>
												<p>{books.sinopsis}</p>
									
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ books.length === 0 && <div className="alert alert-warning text-center">No se encontraron libros...</div>}
				</>
							
			}
		</div>
	)
}
export default SearchBooks;