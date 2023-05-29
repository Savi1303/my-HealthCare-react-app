import React from 'react'
import './article.css'
import Line from '../../Images/Rectangle 2.png' 
import Inject from '../../Images/Mask Group.png' 
import Mirco from '../../Images/Mask Group (1).png' 
import FaceCare from '../../Images/Mask Group (2).png' 
import Down from '../../Images/Vector2.png' 

function Article() {
  return (
    <div>
        <div className='container article'>
        <div className="article-main-section text-center">
                 <h2 className='article-header'>Check out our latest article</h2>
                <img src={Line} alt=""/>
        </div> 
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-4'>
                  <div className='article-card'>
                        <img className='mb-3 ver' src={Inject} alt="" />
                      <div className='article-body'>
                        <h3 className='article-head mb-3'>Disease detection, check up <br/> in the laboratory</h3>
                        <p className='article-para'>In this case, the role of the health <br/> laboratory is very important to do <br/> a disease detection...</p>
                        <a className='article-footer'>Read more <img src={Down} alt="" href='' className='arrow' /> </a>
                      </div>
                  </div>
          </div>  
          <div className='col-sm-12 col-md-12 col-lg-4'>
                  <div className='article-card'>
                        <img className='mb-3 ver' src={Mirco} alt="" />
                      <div className='article-body'>
                        <h3 className='article-head mb-3'>Herbal medicines that are <br/> safe for consumption</h3>
                        <p className='article-para'>Herbal medicine is very widely used <br/> at this time because of its very good <br/> for your health...</p>
                        <a className='article-footer'>Read more <img src={Down} alt="" href='' className='arrow' /> </a>
                      </div>
                  </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='article-card'>
                        <img className='mb-3 ver' src={FaceCare} alt="" />
                      <div className='article-body'>
                        <h3 className='article-head mb-3'>Natural care for healthy <br/> facial skin</h3>
                        <p className='article-para'>A healthy lifestyle should start from <br/> now and also for your skin health.<br/> There are some...</p>
                        <a className='article-footer'>Read more <img src={Down} alt="" href='' className='arrow' /> </a>
                      </div>
                  </div>
          </div>
        </div>
        </div> 
        <div className='service-section-footer text-center'>
          <button className='service-btn brn'>View all</button>
        </div>
    </div>
  )
}

export default Article
