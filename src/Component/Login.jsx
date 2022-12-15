import React from 'react';

function Login() {
    return (
        <div className='row mt-5'>
            <form className='m-auto w-25'>
                <h1 className='text-center'>Login </h1>
                <div class="mb-3 mt-5">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form> 
        </div>  
    )
}
export default Login;