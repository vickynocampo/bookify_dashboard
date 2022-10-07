import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';

function Chart (){   
const [tableRowsData, setTableRowsData]  = useState([]);
useEffect(() => {
	 console.log("se monto el componente")
	 fetch(`http://localhost:3030/api/products/`)
		.then(response => response.json())
		.then(data => {
			console.log("data de libros para pasar por props")
			console.log(data)
			setTableRowsData(data.products)})
		.catch(error => console.error(error));
}, [])
return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Categoria</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Chart;