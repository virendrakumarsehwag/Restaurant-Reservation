import React from 'react'
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    hello sffvvvnvbknvkvnkvsnfosdfj odvjdvsdjvovj  jjvjovsjvsovjcvjojv  
                    vbcbvvbvbvbvbvbbvbvbvbvbvbvbvcb  bvdzf dd g dv v v v b bb b g f bf f f 
                    b b b d bd d b db d b db d bd  db db d bd b d bd bd 
                    d b db db db db d b db d bdb d bd b d b db bf bfb fb fbc bdf bfdb fbf bfd df   b
                    df b dfb db  fcb d jodvjvodjv djvodvjd odvbjdj jdvjvj hello honey fgfgfgbfb
                    bunny how arw yoyyro o o  oo roo oeororor orsosoosfosfsogog fdo ooso 
                </p>
                <Link to={"/"}>
                    Explore Menu {" "} 
                    <span>
                    <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  );
};

export default About;