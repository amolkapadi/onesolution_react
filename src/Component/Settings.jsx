import React from 'react';
import AllSettings from './AllSettings';
import Side from './Side';
export default function Settings() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                    <Side />
                </div>
                <div className='col-md-10'>
                    <AllSettings />
                </div>
            </div>
        </div>
    )
}