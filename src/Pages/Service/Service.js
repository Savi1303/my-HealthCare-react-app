import React from 'react'
import './service.css'
import Line from '../../Images/Rectangle 2.png' 
import Magnifier from '../../Images/Group.png'
import Pill from '../../Images/Group 2.png'
import Report from '../../Images/Frame 1.png'
import Info from '../../Images/Frame1.png'
import Track from '../../Images/Group 5.png'
import Aid from '../../Images/Frame.png'



function Service() {
  return (
    <div className='container service'>
       <div className="service-main-section text-center">
        {/* <div data-aos="zoom-in-up"  data-aos-anchor-placement="center-center"  data-aos-duration="1000"> */}
           <h2>Our Services</h2>
           <img src={Line} alt=""/>
           <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br/> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        {/* </div> */}
      </div>
       
       <div className="row">
          <div className='col-sm-12 col-md-12 col-lg-1'></div>
          <div className='col-sm-12 col-md-12 col-lg-11'>         
            <div className="row service">
              <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="1200"> */}
                        <img className='mb-3' src={Magnifier} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Search Doctor</h3>
                        <p>Choose your doctor from thousands  <br/> of specialist, general, and trusted <br/> hospitals</p>
                    </div>
                  {/* </div> */}
                </div>
              </div>  
              <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="1000"> */}
                      <img className='mb-3' src={Pill} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Online pharmacy</h3>
                        <p>Buy your medicines with our mobile<br/> application with a simple <br/> delivery system</p>
                    </div>
                  {/* </div> */}
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="800"> */}
                      <img className='mb-3' src={Report} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Consultation</h3>
                        <p>Free consultation with our trusted <br/>doctors and get the best<br/> recomendations</p>
                    </div>
                  {/* </div> */}
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4 mt-4'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="600"> */}
                      <img className='mb-3' src={Info} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Details info</h3>
                        <p>Free consultation with our trusted <br/>doctors and get the best<br/> recomendations</p>
                    </div>
                  {/* </div> */}
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4 mt-5'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="400"> */}
                      <img className='mb-3' src={Aid} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Emergency care</h3>
                        <p>You can get 24/7 urgent care for <br/>yourself or your children and your<br/> lovely family</p>
                    </div>
                  {/* </div> */}
                </div>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-4 mt-5'>
                <div className='service-second-section'>
                  {/* <div data-aos="flip-right" data-aos-anchor-placement="top-center"  data-aos-duration="200"> */}
                      <img className='mb-3' src={Track} alt="" />
                    <div className='service-section-body'>
                        <h3 className='mb-3'>Tracking</h3>
                        <p>Track and save your medical history<br/>and health data </p>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div> 
       </div>

       <div className='service-section-footer text-center'>
        <button className='service-btn'>Learn more</button>
       </div>

    </div>
  )
}

export default Service
