import React from 'react'
import hero1 from "../img/1hero.png";
import hero2 from "../img/2hero.png";
import hero3 from "../img/3hero.png";
import hero4 from "../img/4hero.png";
import hero5 from "../img/5hero.png";
import hero6 from "../img/6hero.png";
import herocol2 from "../img/herocol1.png";
import herocol1 from "../img/herocol2.png";




const Herosection2 = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row" >
                    {/* <img src={hero1} className='img-responsive' style={{width: '2rem', height: '2rem'}} alt="pic1" />
            <img src={hero2} className='img-responsive' alt="pic1" />
            <img src={hero3} className='img-responsive' alt="pic1" />
            <img src={hero4} className='img-responsive' alt="pic1" />
            <img src={hero5} className='img-responsive' alt="pic1" />
            <img src={hero6} className='img-responsive' alt="pic1" /> */}
                </div>

                <div className="row">
                    <div className="col col-md-4 col-lg-4 col-sm-12 " style={{ paddingTop: '5rem' }}>
                        <h1 style={{ fontSize: '4.5rem' }}> Create <br />
                            your own <br /> Web3 <br /> Masterpiece  </h1>

                        <p>
                            Most entrepreneurs want to <br /> create their own web3 sites, <br /> unfortunately, they dont <br /> know much about creating one. Web3Makr makes it <br /> easier for newbies to create a blockchain-based <br /> collectibles solution without the hassle of leaving their favorite creation <br /> tools and by simple drag and drop functionality.
                        </p>
                        <br />
                        <button className='btn btn-outline-success' >Start building</button>
                    </div>

                    <div className="col col-md-8 col-lg-8 col-sm-12">
                        <img src={herocol2} alt="pic" className='img' style={{ height: '40rem', width: '80rem' }} />
                    </div>
                </div>

                <div className="row">

                    <div className="col col-md-8 col-lg-8 col-sm-12">
                        <img src={herocol1} alt="pic" className='img' style={{ height: '40rem', width: '80rem', paddingRight: '15rem' }} />
                    </div>

                    <div className="col col-md-4 col-lg-4 col-sm-12 " style={{ paddingTop: '5rem' }}>
                        <h1 style={{ fontSize: '3rem' }}> Can be changed to <br /> customizable <br />ready made <br />web3 dapps <br />templates.
                        </h1>

                        <p>
                        01 NFT(ERC721). <br /> 02 NFT(ERC721). <br /> 03 NFT(ERC721). <br /> 04 NFT(ERC721). <br /> 
                        </p>

                        <br />
                        <button className='btn btn-outline-success' >Start building</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection2
