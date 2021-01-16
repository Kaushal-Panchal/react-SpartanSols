
import React, { useState } from 'react';

const Contact = ()=>{
    const [mail,setMail] = useState("");
    const [name,setName] = useState("");
    const [msg,setMsg] = useState("");
    const nameChange = (e)=>{
        setName(e.target.value);
    }
    const mailChange = (e)=>{
        setMail(e.target.value);
    }
    const msgChange = (e)=>{
        setMsg(e.target.value);
    }
    const submit = ()=>{
        alert(`Your name is ${name} and Email is ${mail} Your message - " ${msg} "
        Thanks for your response!`);
    }
    return(
        <>
        <section id="" className="d-flex align-items-center">
        <div className="container-fluid nav_bg mb-3 pt-5">
            <div className="row" >
                <div className="col-sm-5 mx-auto">
                <form onSubmit={submit}>
                    <div className="form-group row">
                    <label  className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" value={name} onChange={nameChange} autoComplete='off' className="form-control" required placeholder="Full Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label  className="col-sm-4 col-form-label">E-Mail</label>
                        <div className="col-sm-10">
                            <input type="email" value={mail} onChange={mailChange} autoComplete='off' className="form-control" required placeholder="abc@example.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-4 col-form-label" >Message</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" required value={msg} onChange={msgChange} rows="3"></textarea>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                            <button type="submit" className="btn btn-outline-success">Submit</button>
                            </div>
                        </div>
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Contact;