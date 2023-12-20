import React from 'react'
import lady from "../img/lady.png";

const Compo = () => {
    return (
        <>
            <div className="container my-5 bgcolor">
                <div className="row">
                    <div className="col col-lg-8 col-md-8">

                        <div className="row">
                            <h1>Request <link rel="stylesheet" href="" className='colorblue' />Callback</h1>

                        </div>


                        <div className="row my-5">

                            {/* naming col */}
                            <div className="col col-sm-12 col-lg-6 col-md-6">
                                <label htmlFor="name">
                                    <div className='mb-1'><b>Name *</b></div>
                                    <input id='name' type="text" placeholder='John' style={{width: '15rem'}}/>
                                </label>
                            </div>

                            {/* Email columns */}
                            <div className="col col-sm-12 col-lg-6 col-md-6">
                                <label htmlFor="Email">
                                    <div className='mb-1'><b>Email *</b></div>
                                    <input id='Email' type="text" placeholder='John@gmail.com' style={{width: '15rem'}}/>
                                </label>
                            </div>
                        </div>


                        <div className="row my-5">

                            {/* Mobile col */}
                            <div className="col col-sm-12 col-lg-6 col-md-6">
                                <label htmlFor="mobile">
                                    <div className='mb-1'><b>Mobile No. *</b></div>
                                    <input id='mobile' type="text" placeholder='00 (123) 456 78' style={{width: '15rem'}}/>
                                </label>
                            </div>
                            

                            {/* Email columns */}
                            <div className="col col-sm-12 col-lg-6 col-md-6">
                                <label htmlFor="money">
                                    <div className='mb-1'><b>Looking to invest (in RS) *</b></div>
                                    {/* <input id='money' type="text" placeholder='John@gmail.com' /> */}
                                    <select name="money" id="money" style={{width: '15rem'}}>
                                        <option value="1">Select</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <input type="checkbox"/><p>I authorize Estee Advisors Pvt. Ltd. <br />to contact me. This will override registry <br /> on the NDNC. As per SEBI guide Lines, minimum investment required <br />is of ₹50 Lakhs.</p>
                        </div>

                        <div className="row">
                            <button className='btn btn-lg mx-5 bg-danger text-white' style={{width: '20rem'}}>Request Callback</button>
                        </div>

                    </div>


                    <div className="col col-lg-4 col-md-4 column2">
                        {/* <h1>second columns</h1> */}
                        <img src={lady} alt="lady" className='img img-responsive lady text-center'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compo
