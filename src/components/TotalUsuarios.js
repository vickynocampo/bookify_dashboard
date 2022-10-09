import React, { useState, useEffect } from 'react';
import imagenFondo from '../assets/images/usuarios.png';

function TotalUsuarios(){
const [users, setUsers]  = useState([]);
	
useEffect(() => {
	 console.log("se monto el componente")
	 fetch(` http://localhost:3030/api/users`)
		.then(response => response.json())
		.then(data => {
			console.log("data de usuarios")
			console.log(data)
			setUsers(data.users)})
		.catch(error => console.error(error));
}, [])

return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Total Usuarios {users.length}</h5>
                </div>
                <div className="text-center">
                        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="Usuarios"/> */}
                </div>
                <ul>
				{users.length === 0 && <p>Cargando...</p>}
				{
					users.map((user, i) => {
						return (
							<li key={i}>
								<h6>Nombre: {user.name} {user.lastName}</h6>										
								<h6>Email: {user.email}</h6>
								<br/>
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={user.avatar} alt="Usuarios"/>
							</li>
						)			
					})
				}					
			    </ul>		               
            </div>
        </div>
    )
}

export default TotalUsuarios;