import React, { useState, useEffect } from 'react';

function SearchUsers(){
	const [users, setUsers]  = useState([]);
	const [keyword, setKeyword] = useState("");
	const [search, setSearch] = useState("");

	useEffect( () => {
		console.log("se monto el componente para search users")
		fetch(`http://localhost:3030/api/users/search/${keyword}`)
		.then(response => response.json())
		.then(data => {
			console.log("data serach users")
			console.log(data)
			setUsers(data.users)
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
									<label htmlFor="">Buscar por nombre de usuario:</label>
									<input type="text" className="form-control" value={search} onChange={handleChange} />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Usuarios para el nombre: {keyword}</h2>
						</div>
					{
							users && users.map((users, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">Nombre: {users.name} {users.lastName} </h5>
												<br/>
												<p>Email:{users.email}.-</p>
												<p>Id: {users.id}</p>
											</div>
											<div className="card-body">
												<div className="text-center">												
														<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '70%', height: '80%', objectFit: 'cover' }}  src={users.avatar} alt="Portada"/>
																
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ users.length === 0 && <div className="alert alert-warning text-center">No se encontraron usuarios...</div>}
				</>
							
			}
		</div>
	)
}
export default SearchUsers;