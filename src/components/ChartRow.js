import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 90 +'rem'}} src={props.front} alt="Portada"/></td>              
                </tr>
            )
    }            

export default ChartRow;