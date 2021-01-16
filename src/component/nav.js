import'./nav.css';
import React from "react"
import {Link} from "react-router-dom"
class nav extends React.Component{
    render(){
        return(
         <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 ">
                <div class="container-fluid" id="geser">
                        <Link to="/" className="nav-link navbar-brand ">
                                BERANDA
                        </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/galeri" className="nav-link">
                                GALERI
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/hari_besar" className="nav-link">
                                HARI BESAR
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
         </div>
         
        );
    }
}


export default nav;