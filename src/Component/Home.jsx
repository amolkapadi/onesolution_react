import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Side from './Side';  

function Home() {
    return (
        <>
            
            <div className='container'>
                <div className='row'>
                <div className='col-md-2'>
                    <Side />
                </div>
                <div className='col-md-10'>
                     <Card />
                </div>
                </div>
            </div>
        </>
    )
}

export default Home;