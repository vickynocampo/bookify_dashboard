import React, { useState, useEffect } from 'react';
import imagenFondo from '../assets/images/libro.jpg';

function LastBook(){

    const [lastBook, setlastBook]  = useState([]);
	
    useEffect(() => {
         console.log("se monto el componente para last book")
         fetch(`http://localhost:3030/api/products/`)
          .then(response => response.json())
          .then(data => {
            console.log("data de lastbook")
            console.log(data)
            setlastBook(data.products.pop())})
          .catch(error => console.error(error));
      }, [])

return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo libro creado en BD:</h5>
                    <hr/>
                    <h4>Titulo: {lastBook.name}</h4>
                    <p>Autor: {lastBook.author}</p>
                    <p>Precio: $ {lastBook.price}.-</p>
					<p>Stock: {lastBook.stock}</p>
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={lastBook.front} alt="Portada"/>
                    <p>{lastBook.description}</p>
                
                  
                </div>         
                
                {/* <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
                </div> */}
            </div>
        </div>
    )
}

export default LastBook;