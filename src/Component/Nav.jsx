import React from "react"

function Nav(){
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src='./One.png'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link "  href="#"><i className="bi bi-plus-circle"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <i className="bi bi-bell-fill"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                        <button className="btn btn-primary">logout</button>
                                </a>
                            </li>

                           
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;