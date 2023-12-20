import React from 'react'
import logo from "../img/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <>
        <div className="container-fluid my-5">
            <div className="row foot_bg" style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            <div className="col col-md-4 col-lg-4 col-sm-6 text-center">
                            <img src={logo} alt="logo" className='img img-responsive' />
                        </div>

            </div>


            <div className="row foot_bg" style={{ paddingLeft: '7rem', display: 'flex', justifyContent: 'space-between' }} >

                <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5" >
                    <b className='foot_bg'>copyright2022 &copy; Web3makr</b>
                </div>

                <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5">
                    <FontAwesomeIcon className='foot_bg mx-3' icon={faLinkedin} /> <FontAwesomeIcon className='foot_bg mx-3' icon={faFacebook} />
                        <FontAwesomeIcon className='foot_bg mx-3' icon={faTwitter} />
                    {/* pic of facebook etc */}
                </div>

                {/* <div className="col col-sm-6 col-md-3 col-lg-3 foot_bg my-5">
                    <b className='foot_bg'>TERMS | PRIVACY</b>
                </div> */}
            </div>
            </div>

        </>
    )
}

export default Footer
