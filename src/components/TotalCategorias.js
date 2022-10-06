import React, { useState, useEffect } from 'react';

function TotalCategorias() {
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
  
return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
           <h5 className="m-0 font-weight-bold text-gray-800">Total de Categorias {categories.length}</h5>
        </div>       
        {categories.length === 0 && <p>Cargando...</p>}
				{categories.map((category, i) => {
						return (
              <div className="card-body">
                <div className="row">
                 <div className="col-lg-6 mb-4">
                   <div className="card bg-dark text-white shadow">							    
								      <h5 key={i}>{category.name}</h5>		
										</div>
                  </div>
                </div>
              </div>					
            )})
          }
      </div>
    </div>
  ) 
}

export default TotalCategorias;