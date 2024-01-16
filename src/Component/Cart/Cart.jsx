import React, { useEffect, useState } from 'react'
import "./cart.scss"
import { Link } from 'react-router-dom'
import maclogo from "./maclogo.png"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Cart = () => {

// hghgfhgfghfhf
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(0);
  const [getPrdct, setProdct] = useState([]);
  

  const getPrdctDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/eco/getCartProduct/${id}`);
      setProdct(res.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    getPrdctDetails();
  }, []);

  useEffect(() => {
    const totalPriceSum = getPrdct.reduce((sum, product) => sum + Number(product.price), 0);
    setTotalPrice(totalPriceSum);
  }, [getPrdct]);

  const qty=(e,index)=>{
    const selectedQty=parseInt(e.target.value,10);
    const price=getPrdct[index].price;

    if(!isNaN(price)){
      const updatedPrice=price*selectedQty;
      console.log(updatedPrice);
      const updatedGetPrdct = [...getPrdct];
      console.log(getPrdct);
      updatedGetPrdct[index].price=updatedPrice
      setProdct(updatedGetPrdct)
    }
  }


  // const BuyNow = async (e) => {
  //   e.preventDefault();
  //   const userConfirmed = window.confirm("Are you sure you want to proceed to checkout?");
  //   if (userConfirmed) {
  //     try {

  //       // console.log(res.data);
  //       await axios.post(`http://localhost:3333/eco/placeOrder/${id}`);
  //       alert("Order Placed");
  //       window.location.reload()
  //       navigate("/")
  //     } catch (error) {
  //       console.error("Error deleting products:", error);
  //     }
  //   }
  // };

  const BuyNow = async (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm('Are you sure you want to proceed to checkout and delete all products?');
    if (userConfirmed) {
      try {
       
        await axios.delete(`http://localhost:3333/eco/delAlltProduct/${id}`);
        alert('Order Placed');
        window.location.reload()
        navigate('/');
      } catch (error) {
        console.error('Error deleting products:', error);
      }
    }
  };

  const delCartPrdct = async (id) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this product from the cart?');
    if (userConfirmed) {
      try {
        await axios.delete(`http://localhost:3333/eco/delCartProduct/${id}`);
        alert('Product deleted');
        getPrdctDetails();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };


  return (


    <div>
      <div className="mainadmin">
        <div className="navitem">
          <div className="maclogo">
            <img src={maclogo} alt="" />
          </div>
          <div className="centernav">
            <h4></h4>
          </div>
          <div className="serachbox">
            {/* <input type="text" value="Admin name" /> */}
          </div>
          <div className="addtocart">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg> */}
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
      </div>
      <div className='shopping'>
        <h1>Shopping Cart</h1>

        <div className="shopping-cart">

          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {getPrdct.length === 0 ? (
                   <>
                    <p className="no-items-message">No items in the cart</p>
                    <div className='shpDiv'><Link className='shp-now-btn' to='/'>Shop Now</Link></div>
                   </>
                ) : (
                    <>
          {getPrdct.map((data, index) =>
              <div className="product1" key={index}>
                <div className="product-image">
                  <img src={data.banner} />
                </div>
                <div className="product-details">
                  <div className="product-title">{data.product_name}</div>
                  <p className="product-description">{data.Description}</p>
                </div>
                <div className="product-price">₹ {data.price}</div>
                <div className="product-quantity">
                  <select name="" id="" className='product-quantity'  onChange={(e) => qty(e, index)}>
                    <option value="1">Qty : 1</option>
                    <option value="2">Qty : 2</option>
                    <option value="3">Qty : 3</option>
                    <option value="4">Qty : 4</option>
                    <option value="5">Qty : 5</option>
                    <option value="6">Qty : 6</option>
                    <option value="7">Qty : 7</option>
                    <option value="8">Qty : 8</option>
                  </select>
                </div>
                <div className="product-removal">
                  <button onClick={() => delCartPrdct(data._id)} className="remove-product">Remove</button>
                </div>
                <div className="product-line-price">₹ {data.price}</div>
              </div>
                 )}
                 </>
             )}




          <div className="totals">
            <div className="totals-item">
              <label>Subtotal inc.GST</label>
              <div className="totals-value" id="cart-subtotal">₹  {totalPrice ? totalPrice : 0}</div>
            </div>
            
            <div className="totals-item">
      <label>Shipping charge</label>
      <div className="totals-value" id="cart-shipping">99</div>
    </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">₹ {totalPrice ? totalPrice + 99 : 99}</div>
            </div>
          </div>

          <button className="checkout" onClick={BuyNow}>Checkout</button>
          </div>
        </div>
     

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

  )
}

export default Cart
