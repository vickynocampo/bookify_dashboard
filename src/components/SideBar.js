import React from 'react';
import image from '../assets/images/bookifylogo3.png';
import ContentWrapper from './ContentWrapper';
import TotalCategorias from './TotalCategorias';
import LastBook from './LastBook';
import TotalUsuarios from './TotalUsuarios';
import ContentRowBooks from './ContentRowBooks';
import ListBooks from './ListBooks';
import DetalleLibro from './DetalleLibro';
import DetalleUsuario from './DetalleUsuario';
import Search from './Search';
import SearchUsers from './SearchUsers';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>       
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Bookify"/>
                    </div>
                </a>
                <hr className="sidebar-divider my-0"/>          
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Bookify</span></Link>
                </li>              
                <hr className="sidebar-divider"/>
                {/* <div className="sidebar-heading">Acciones</div>      */}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ListBooks">
                <i className="fas fa-book"></i>  
                    <span>Listado Libros</span></Link>
                </li>
                {/* <li className="nav-item nav-link">
                <Link className="nav-link" to="/DetalleLibro">
                    <span>Detalle Libro</span></Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastBook"> 
                    <i className="fas fa-book"></i>                       
                        <span>Ultimo Libro Creado</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/TotalUsuarios">     
                    <i className="fas fa-user"></i>                 
                        <span>Listado Usuarios</span></Link>
                </li>   
                {/* <li className="nav-item nav-link">
                <Link className="nav-link" to="/DetalleUsuario">
                    <span>Detalle Usuario</span></Link>
                </li>      */}
                <li className="nav-item">
                <Link className="nav-link" to="/TotalCategorias">   
                <i class="fa-solid fa-objects-column"></i>
                <i class="fas fa-filter"></i>                                
                        <span>Listado Categorias</span>
                    </Link>
                </li>          
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowBooks">     
                <i class="fas fa-calculator"></i>              
                        <span>Totales Generales</span></Link>
                </li>
                {/* <hr className="sidebar-divider d-none d-md-block"/> */}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Search">     
                <i className="fas fa-search"></i>              
                        <span>Buscador de Libros</span></Link>
                </li>
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchUsers">  
                <i className="fas fa-search"></i>                 
                        <span>Buscador de Usuarios</span></Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/TotalCategorias">
                    <TotalCategorias />
                </Route>
                <Route path="/LastBook">
                    <LastBook />
                </Route>
                <Route path="/TotalUsuarios">
                    <TotalUsuarios />
                </Route>
                <Route path="/ContentRowBooks">
                    <ContentRowBooks />
                </Route>
                <Route path="/ListBooks">
                    <ListBooks />
                </Route>
                <Route path="/Search">
                    <Search />
                </Route>
                <Route path="/SearchUsers">
                    <SearchUsers />
                </Route>
                <Route exact path="/DetalleLibro">
                    <DetalleLibro />
                </Route>
                <Route exact path="/DetalleUsuario">
                    <DetalleUsuario />
                </Route>
                <Route component={NotFound} />
            </Switch>
         </React.Fragment>
    )
}
export default SideBar;