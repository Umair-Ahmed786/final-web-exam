import React from 'react'
import img6 from "../img/img6.png";

const Herosection3 = () => {
  return (
    <>
     <div className="container my-5">
        <div className="row mt-3">
            <h1 style={{fontSize: '5rem', textAlign: 'center'}}>The Future of Web3 NoCode  </h1>
        </div>

        <div className="row text-center">
            <h2>
            Web3Makr allows you to incorporate top ranked blockchain platforms <br /> into your work through the drag and drop feature.
            </h2>
        </div>

        <div className="row" style={{marginTop: '10rem'}}>
            <div className="col col-md-2 col-lg-2">
                <h2>
                    Multi chain <br /> dashboard <br />Tool
                </h2>
            </div>
            <div className="col col-md-10 col-lg-10" style={{paddingLeft: '10rem'}}>
                <img src={img6} alt="" style={{height: '50rem'}} />
            </div>
        </div>
        </div> 
    </>
  )
}

export default Herosection3
