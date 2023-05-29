import React from 'react'
import './download.css'
import '../Service/service.css'
import Down from '../../Images/trafalgar1.png'
import Line from '../../Images/Rectangle 2.png' 
import Down1 from '../../Images/trafalgar2.png'
import Arrow from '../../Images/Vector.png'

function Download() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className='down-section-img'>
                <img src={Down} alt="" className='vert' />
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className='down-section-content  mb-3'>
                <h2>Leading healthcare <br/> providers</h2>
                <img src={Line} alt="" />
                <p className='mt-3'>Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for <br/> everyone.
                   To us, it's not just work. We take pride <br/> in the solutions we deliver
                </p>
                <div className='service-section-footer'>
                <button className='service-btn'>Learn more</button>
                </div>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className='app-section-content mb-3'>
                <h2>Download our <br/> mobile apps</h2>
                <img src={Line} alt="" />
                <p className='mt-3'>
                  Our dedicated patient engagement app <br/> and web portal allow you to access
                  information <br/> instantaneously (no tedeous form, long calls, <br/> or administrative hassle) and securely
                </p>
                <div className='service-section-footer'>
                <button className='service-btn'>Download
                 <img className='ar-btn' src={Arrow} alt="" />
                </button>
                </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-6'>
            <div className='app-section-img'>
                <img src={Down1} alt="" className='vert' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Download