import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props)=>{
    return(
        <>
        <section id="" className="d-flex align-items-center">
        <div className="container-fluid nav_bg mb-3 pt-5">
                <div className="row" >
                    <div className="col-10 mx-auto">
                      <div className="row">
                      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                        <h1>
                            {props.head} <strong className="navbar-brand">Spartan Solutions</strong>
                        </h1>
                        <h2 className="my-3">We use latest and reliable tech </h2>
                        <div className="mt-3">
                            <NavLink to={props.btnTo} >
                                <button type="button" className="btn btn-outline-info ">{props.btn}</button>
                            </NavLink> 
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-around" >
                                <img src={props.image} alt="Logo" style={{height:"750px"}} className="img-fluid animate"/>
                      </div>
                      </div>
                    </div>
                </div>
        </div>

        </section>
        </>
    );
}
export default Common;