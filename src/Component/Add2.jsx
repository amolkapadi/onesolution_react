import React from 'react';
import { Link } from 'react-router-dom';
import { ReactFlow } from 'reactflow';
import Side from "./Side";
import TemplateName from './TemplateName';


function Add2() {
    return (

        <>     
           <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <Side />
                </div>
                <div className='col-md-10'>
                    <form className="row g-3 formpadding mt-5">
                        <p>Process Workflow Modeller</p>
                        <div className="forminner">
                            <div className="d-flex">


                                <div className="col-md-4 ms-3">
                                    <label for="inputState" className="form-label">Process Template</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                
                                <div className="col-auto">
                                    <Link type="submit" className="btn btn-primary newbtn ms-3"data-bs-toggle="modal" data-bs-target="#exampleModal" >New</Link>
                                </div>
                            </div>

                            <div className='col-md-12 bg'>
                                <div className='d-flex mt-5 gap-3 p-2'>
                                    <button className='btn btn-light '>Meeting</button>
                                    <button className='btn btn-light'>Task</button>
                                    <button className='btn btn-light'>TimeSheet Entry </button>
                                    <button className='btn btn-light'>Other</button>
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <p>Initiate Workflow When</p>

                                <div className='col'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Voice data is received</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">One Assistant Chatbot</label>
                                    </div>
                                </div>
                                <div>
                                    <div className='col'>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label class="form-check-label" for="flexSwitchCheckDefault"> On workflow selection</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <p>User Intaractions while running workflow</p>

                                <div className='col'>
                                    <div class="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Require user approval</label>
                                    </div>
                                </div>
                        
                                <div>
                                    <div className='col'>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" for="flexSwitchCheckDefault"> Require USer confirmation</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex">
                                <button type="submit" className="btn btn-primary nextbtn ms-auto mt-3" >Next</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Process Modeller</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='card'>
                                    <div class="card-body" style={{height:"500px"}}>
                                    
                                    </div>    
                                    </div>
                                </div>
                                <div className='col-9' style={{height:"500px"}}>
                                <TemplateName />
                                           
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger model-close" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success model-save" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Add2;
