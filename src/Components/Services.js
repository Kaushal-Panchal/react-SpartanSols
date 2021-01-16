import React from 'react';
import {serviceList} from './ServiceList';

const Services = ()=>{
    return(
        <>
        <section id="" className="d-flex align-items-center">
        <div className="container-fluid nav_bg mb-3 pt-5">
        <div className="row" >
            <div className="col-10 mx-auto">
            <div className="row row-cols-1 row-cols-md-4">
                {serviceList.map(
                    (value,index)=>{
                        return(
                            <div key={index} className="col mb-4">
                            <div className="card h-100">
                            <img src={value.imgSrc} className="card-img-top" style={{height:"300px"}} alt={index}/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text" style={{fontSize:"15px"}}>{value.about}</p>
                            </div>
                            </div>
                        </div>

                        );
                    }
                )}
            </div>
            </div>
            </div>
            </div>
            </section>
        </>
    );
}

export default Services;