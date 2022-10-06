import React from 'react';
import image from '../assets/images/bookifylogo3.png';
import ContentWrapper from './ContentWrapper';
import TotalCategorias from './TotalCategorias';
import LastBook from './LastBook';
import TotalUsuarios from './TotalUsuarios';
import ContentRowBooks from './ContentRowBooks';
import SearchBooks from './SearchBooks';
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

                <div className="sidebar-heading">Acciones</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/TotalUsuarios">
                    
                        <span>Total Usuarios</span></Link>
                </li>

            
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowBooks">
                   
                        <span>Total Libros</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/LastBook">                      
                        <span>Ultimo Libro Creado</span></Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/TotalCategorias">
                                       
                        <span>Total Categorias</span>
                    </Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchBooks">
                        <i className="fas fa-search"></i>
                        <span>Buscar Libros</span></Link>
                </li>
 
                <hr className="sidebar-divider d-none d-md-block"/>
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
                <Route path="/SearchBooks">
                    <SearchBooks />
                </Route>
                <Route component={NotFound} />
            </Switch>
         </React.Fragment>
    )
}
export default SideBar;