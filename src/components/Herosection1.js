import React from 'react'
import Button from 'react-bootstrap/Button';
import banner from "../img/banner.png";

const Herosection1 = () => {
  return (
    <>
     <div className="container text-center">
        
        <div className="row text-center">
            <h1 style={{fontSize: '6rem'}}>Web3Makr Redefining</h1>
            <h3 style={{fontSize: '4rem'}}>How you Create</h3>
            <h5 style={{fontSize: '2rem'}}>Unlock the blockchain potential to create Web3 Applications</h5>
        </div>

        <span className="row mt-3 text-center" style={{display: 'flex',justifyContent: 'center', paddingTop: '2rem'}}>
        <Button className="btn-lg btn-outline-success" style={{color: "white", width: '6rem'}}>Play</Button>                             
        </span>

        <div className="row">
            <img className='img-responsive' src={banner} alt="" />
        </div>
    
    </div> 
    </>
  )
}

export default Herosection1
