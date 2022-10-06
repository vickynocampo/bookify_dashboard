import React from 'react';
import LastBook from './LastBook';
import TotalCategorias from './TotalCategorias';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastBook />

            <TotalCategorias />

        </div>
    )
}

export default ContentRowCenter;