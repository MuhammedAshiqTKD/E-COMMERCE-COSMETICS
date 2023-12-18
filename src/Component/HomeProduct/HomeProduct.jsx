import React from 'react'
import maclogo from './maclogo.png'
// import bannerimgseller from "./sleek banner desktop-1.avif"
// import {Link} from 
// import { useState } from 'react'
import './Homeproduct.css'
const HomeProduct = () => {

    return (
        <div>
            <div className="main">
                <div className="navitem">
                    <div className="maclogo">
                        <img src={maclogo} alt="" />

                    </div>
                    <div className="centernav">
                        <h4></h4>
                    </div>






                    <div className="serachbox">

                        <input type="text" placeholder='Search here' />
                    </div>




                    <div className="addtocart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                    </div>
                </div>



                <div className="itemlist">
                    <div className="item11">NEW! STUDIO RADIANCE FOUNDATION</div>
                    <div className="item1">BEST-SELLERS</div>
                    <div className="item1">NEW</div>
                    <div className="item1">LOPS</div>
                    <div className="item1">FACE</div>
                    <div className="item1">EYES</div>
                    <div className="item1">SKIN CARE</div>
                    <div className="item1">OFFER</div>
                    <div className="item1">EXPLORE</div>
                </div>


                <div className="bottomline">

                </div>


                <div className="bestsellers">
                    <h1>BEST SELLERS</h1>
                </div>
                <div className="botoomsellerbanner">
                    <h1>DAZZLE BRIGHTER</h1>
                    <h2>WITH M.A.C</h2>
                    <h3>Pick your Eye Shadow on ₹4,000*</h3>
                    <h4>  Get a 2-Piece Kit on ₹5,500*</h4>
                    <div className="shopnow">
                        <button>SHOP NOW</button>
                        <h5>*Pick free products at checkout.</h5>
                        <h6>*Offer valid from 15th to 20th December.</h6>
                        <span>*Offer valid on maccosmetics.in until stocks last</span>
                    </div>
                </div>

                <div className="homebestsellers">
                    <div className="HOME">
                        HOME</div>
                    <div className="homebuttom">
                        /
                    </div>
                    <div className="SELLERS">
                        BEST SELLERS
                    </div>
                </div>

                {/* <div className="">
                    <img src="/public/mac_sku_SYP818_1x1_0.avif" alt="" />
                </div> */}
                <div className="productmainhead">
                    <p>SHOP GLOW MUST HAVES</p>
                </div>

                <div className="productmain">
                    {/* <h3>SHOP GLOW MUST HAVE</h3> */}
                    <div className="prouductcard">
                        <div className="newsection">
                            NEW
                        </div>
                        <div className="cardimg">
                            <img src="/public/mac_sku_SYP818_1x1_0.avif" alt="" />

                        </div>
                        <div className="productname">
                            <h1>
                                STUDIO RADIANCE SERUM-POWERED FOUNDATION
                            </h1>
                            <span>
                                ₹ 3,950.00
                            </span>
                            <h2>
                                Serum-Infused Foundation, Medium Buildable Coverage, Lasting Radiant Finish
                            </h2>
                        </div>
                        <div className="productbutton">
                            <button>ADD TO BAG</button>
                        </div>
                    </div>
                    <div className="prouductcard">
                        <div className="newsection">
                            NEW
                        </div>
                        <div className="cardimg">
                            <img src="/public/mac_sku_SYP818_1x1_0.avif" alt="" />

                        </div>
                        <div className="productname">
                            <h1>
                                STUDIO RADIANCE SERUM-POWERED FOUNDATION
                            </h1>
                            <span>
                                ₹ 3,950.00
                            </span>
                            <h2>
                                Serum-Infused Foundation, Medium Buildable Coverage, Lasting Radiant Finish
                            </h2>
                        </div>
                        <div className="productbutton">
                            <button>ADD TO BAG</button>
                        </div>
                    </div>
                    <div className="prouductcard">
                        <div className="newsection">
                            NEW
                        </div>
                        <div className="cardimg">
                            <img src="/public/mac_sku_SYP818_1x1_0.avif" alt="" />

                        </div>
                        <div className="productname">
                            <h1>
                                STUDIO RADIANCE SERUM-POWERED FOUNDATION
                            </h1>
                            <span>
                                ₹ 3,950.00
                            </span>
                            <h2>
                                Serum-Infused Foundation, Medium Buildable Coverage, Lasting Radiant Finish
                            </h2>
                        </div>
                        <div className="productbutton">
                            <button>ADD TO BAG</button>
                        </div>
                    </div>
                    <div className="prouductcard">
                        <div className="newsection">
                            NEW
                        </div>
                        <div className="cardimg">
                            <img src="/public/mac_sku_SYP818_1x1_0.avif" alt="" />

                        </div>
                        <div className="productname">
                            <h1>
                                STUDIO RADIANCE SERUM-POWERED FOUNDATION
                            </h1>
                            <span>
                                ₹ 3,950.00
                            </span>
                            <h2>
                                Serum-Infused Foundation, Medium Buildable Coverage, Lasting Radiant Finish
                            </h2>
                        </div>
                        <div className="productbutton">
                            <button>ADD TO BAG</button>
                        </div>
                    </div>
                </div>




                <div className="secondbanner">
                    <img src="/public/Mpp_vto_banner_new.avif" alt="" />
                </div>



                  <div className="threesecphoto">
                    <div className="seclook">
                    <h1>GET THE GLOW LOOK</h1>
                    </div>



                   <div className="main3phot9sec">
                   <div className="photo1">
                        <img src="/public/1.webp" alt="" />
                    </div>
                    <div className="photo2">
                        <img src="/public/2.avif" alt="" />
                    </div>
                    <div className="photo3">
                        <img src="/public/3.avif" alt="" />
                    </div>
                   </div>



                  </div>



                    <div className="glowessential">
                    GLOW ESSENTIALS
                    </div>


                   <div className="maincardessntial">
                   <div className="cardessentail">
                        <img src="/public/Eye-Block.avif" alt="" />
                        <h1>EYES</h1>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="cardessentail">
                        <img src="/public/Face Block.avif" alt="" />
                        <h1>FACE</h1>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="cardessentail">
                        <img src="/public/Lip Block.avif" alt="" />
                        <h1>LIP</h1>
                        <a>SHOP NOW</a>
                    </div>
                    <div className="cardessentail">
                        <img src="/public/Skin Block 598x598.avif" alt="" />
                        <h1>SKIN</h1>
                        <a>SHOP NOW</a>
                    </div>
                   </div>











                   <div className="glowessential2">
                   WANT MORE HELP?
                    </div>




                    <div className="wantyoumore">
                        <div className="mainyou">
                            <img src="/public/01.avif" alt="" />
                            <h1>VIRTUAL TRY-ON</h1>
                        </div>
                        <div className="mainyou">
                            <img src="/public/02.avif" alt="" />
                            <h1>BOOK A SERVICE</h1>
                        </div>
                        <div className="mainyou" id='main3you'>
                            <img src="/public/03-1.avif" alt="" />
                            <h1>LIVE CHAT</h1>
                        </div>
                    </div>

                {/*  */}
                {/*  */}


                {/* <!-- Site footer --> */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">M·A·C (Make-up Art Cosmetics) is the pioneering makeup authority for all. Since its creation in Toronto, Canada, over 30 years ago, the brands popularity has grown through a tradition of world-of-mouth endorsement from makeup artists, models, photographers and journalists around the world.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
                


              <li><a href="http://scanfcode.com/about/">MAKEUP SERVICES</a></li>
              <li><a href="http://scanfcode.com/contact/">CONTACT US</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">
18002672666</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">SHIPPING INFO</a></li>
              <li><a href="http://scanfcode.com/sitemap/">RETURN POLICY</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> Mac</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>




             
















            </div>
        </div>
    )
}

export default HomeProduct
