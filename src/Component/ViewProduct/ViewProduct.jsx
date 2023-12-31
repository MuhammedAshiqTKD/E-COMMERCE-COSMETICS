import React, { useEffect, useState } from 'react';
import './ViewProduct.scss';
import maclogo from './maclogo.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const [prod, setProd] = useState([]);
  const { category_name } = useParams();

  const getProd = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/eco/getCatWiseProducts/${category_name}`);
      console.log(res.data);
      setProd(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProd();
  }, [category_name]);

  return (
    <div>
      <div className="navitem">
        <div className="maclogo">
          <img src={maclogo} alt="" />
        </div>
        <div className="centernav">
          <h4></h4>
        </div>
        <div className="serachbox">
          <h1>
            <i className="fa fa-user" aria-hidden="true">
              <span></span>
            </i>
          </h1>
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

      <div className="bottomline"></div>

      <div className="header-left">
        <Link to="/home" className="back-btn">
          BACK
        </Link>
      </div>
      {prod.map((data, index) => (
        <Link to={`/productfulldetails/${data._id}`} key={index} >
          <div className="mainproduct">

            <div className="main111" key={index}>
              <div className="sub">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
                  rel="stylesheet"
                />
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />

                <main className='fleee'>
                  <div className="card">
                    <img
                      src={data.banner}
                      alt=""
                    />
                    <div className="card-content">
                      <h2>{data.product_name}</h2>

                      <a href="#" className="button">
                        Explore now
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                      </a>

                    </div>
                  </div>
                </main>
              </div>
            </div>

          </div>

        </Link>))}   </div>
  );
};

export default ViewProduct;
