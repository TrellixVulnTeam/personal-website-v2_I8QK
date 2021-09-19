import "./style.css";
import React from "react";
import svg2 from "../../images/svg2.svg";
import { Link as LinkS } from "react-scroll";

const InfoSection = () => {
  return (
    <container className='info-section'>
      <section className='info-section-container'>
        <div className='info-row'>
          <div className='info-column'>
            <div className='text-wrapper'>
              <div className='top-line'>
                  Cameron McCloskey
                <div className='heading'>
                Welcome to my Personal Portfolio
                  <div className='subtitle'>
                    Full Stack Developr
                  </div>
                    <a href='projects'>
                      <button className='btn'>Projects</button>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className='info-column'>
            <div className='img-wrapper'>
              <img className='info-image' src={svg2} alt='alt'></img>
            </div>
          </div>
        </div>
      </section>
    </container>
  );
};

export default InfoSection;
