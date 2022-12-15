import React from 'react';
import {Link} from 'react-router-dom'

function Side() {
    return (
        <>
            <div className='mt-5 aside  bg-primary'>
                <ul class="nav flex-column  p-3">
                    <li class="nav-item">
                        <Link class="nav-link circle" to='/'>
                            <i class="bi bi-house-fill"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link circle" to="/Settings">
                            <i class="bi bi-gear-fill"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link circle" href="#">
                            <i class="bi bi-grid-fill"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link circle" to="/Reactflows">
                           
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Side;