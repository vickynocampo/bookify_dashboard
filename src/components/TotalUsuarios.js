import React from 'react';
import imagenFondo from '../assets/images/usuarios.png';

function TotalUsuarios(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Total Usuarios</h5>
                </div>
                <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="Usuarios"/>
                </div>
               
            </div>
        </div>
    )
}

export default TotalUsuarios;