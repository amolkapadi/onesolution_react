import React from "react";
import { Link } from "react-router-dom";
import { ReactFlow } from "reactflow";
import TemplateName from './TemplateName';

import Side from "./Side";

function Add1() {
    return (

        <>
         <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <Side />
                </div>
                <div className='col-md-10'>
                    <form className="row g-3 formpadding mt-5">
                        <p>Process Defination</p>
                        <div className="forminner">
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" />
                            </div>

                            <div className="col-12">

                                <label for="inputAddress2" className="form-label">Select Appliction to Intergarte with</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Team Intergartion</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label for="inputCity" className="form-label">Description</label>
                                <textarea type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="d-flex">

                                <div className="col-md-4">
                                    <label for="inputState" className="form-label">Data Sources</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-4 ms-3">
                                    <label for="inputState" className="form-label">Selecet Source Configration</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary newbtn ms-3">New</button>
                                </div>
                            </div>
                            <div class="d-flex">
                                    <Link to="/Add2" type="submit" class="btn btn-primary nextbtn ms-auto mt-3" >Next</Link>
                                </div>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>





        </>
       
    )
}
export default Add1;