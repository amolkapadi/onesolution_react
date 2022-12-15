import React from "react";
import {Link} from "react-router-dom"
const AllSettings = () => {
    return (
        <div className="container">
            <div className="d-flex">
            <Link className="ms-auto btn btn-success" to="/Add1"><span className="add">+</span></Link>
            </div>
            <div className="row mt-2">
                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">Processes DashBoard</p>
                    </div>
                </div>
                
                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text bg-primary1 " >Communication</p>
                    </div>
                </div>

                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">Temms Metting Process Flow</p>
                    </div>
                </div>
                
                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">....</p>
                    </div>
                </div>
                
                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">Finance</p>
                    </div>
                </div>
                
                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">Creadit Card Transation</p>
                    </div>
                </div>


                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">CRN</p>
                    </div>
                </div>

                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">HubShot Integration </p>
                    </div>
                </div>


                <div className="col-md-12 ">
                    <div class="card p-1">
                            <p class="card-text">Unit 4 Intergration</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AllSettings;