import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import maclogo from "./maclogo.png";

const ProductDataFullInCustomer = () => {
    // const navigate=useNavigate()
    const { id } = useParams()
    const [msg, setMsg,] = useState("")
    const [Id, SetId] = useState("")/////my home name
    const value = JSON.parse(localStorage.getItem('customer_token'));
    const [getProducts, setProduct] = useState({
        cust_id: "",
        prod_id: "",
        product_name: "",
        category_name: "",
        Description: "",
        price: "",
        banner: ""


    })
    const getProduct = async () => {
        const res = await axios.get(`http://localhost:3333/eco/getProduct/${id}`)
        console.log(res.data);
        setProduct(res.data)
        /////// console.log(getProducts);
    }

    useEffect(() => {
        getProduct()
    }, [])



    const [getPrdct, setProdct] = useState([]);
    const [cartlength, setcartlength] = useState(0);
    const [getwish, setwish] = useState([]);
    const [wishlength, setwishtlength] = useState(0);


    useEffect(() => {
        const getPrdctDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/eco/getCartProduct/${Id}`);
                // console.log(res.data.length);
                setProdct(res.data);

                setcartlength(res.data.length)
                console.log(cartlength);
                console.log(getPrdct);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        if (Id) {
            getPrdctDetails()
        }
    }, [Id])



    useEffect(() => {

        const getPrdctDetails = async () => {
            const res = await axios.get(`http://localhost:3333/eco/getWishlistProduct/${Id}`);
            setwishtlength(res.data.length)
            setwish(res.data);
            console.log(getwish);

        };
        if (Id) {
            getPrdctDetails()
        }
    }, [Id])




    const getName = async () => {
        const res = await axios.get("http://localhost:3333/eco/CustHome", {
            headers: { Authorization: `Bearer ${value}` },
        })
        console.log(res.data);
        setMsg(res.data.msg)
        SetId(res.data.id)
        console.log(res.data.id);

    }
    useEffect(() => {
        getName()
    }, [])
    // console.log(id);


    ////// adding to cart //////

    const addToCart = async () => {
        try {

            console.log("Customer ID:", msg, id);
            const res = await axios.post("http://localhost:3333/eco/addToCart", { ...getProducts, cust_id: Id,quantity:1,prod_id: getProducts._id });

            console.log(res.data);
            if (res) {
                alert("Added To Cart")
                //   navigate("/cart")

            } else {
                alert("Error adding product to cart. Please try again.")
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Error adding product to cart. Please try again.");
        }
    };

    //////add to wishlist


    const addToWishList = async () => {
        try {
            const res = await axios.post("http://localhost:3333/eco/addtowishList", { ...getProducts, cust_id: Id,quantity:1,prod_id :getProducts._id });
            console.log(res.data);
            if (res) {
                alert("Added To Wishlist")
            } else {
                alert("Error adding product to Wishlist. Please try again.")
            }
        } catch (error) {
            console.error("Error adding product to Wishlist:", error);
            alert("Error adding product to Wishlist. Please try again.");
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

                        <input type="text" value={msg} />
                    </div>




                    <Link className='addtocart' to={`/cart/${Id}`}>
                        <div className="addtocart">

                            <div className="cartt">
                                <span className="count">{cartlength}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16" >
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>

                            </div>
                        </div>
                    </Link>
                    <Link className='addtocart1' to={`/whishlist/${Id}`}>
                        <div className="addtocart1" id='svgfav'>

                            <div className="cartt">
                                <span className="count">{wishlength}</span>
                                {/* <!--   <span className="count">1</span> --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                </svg>
                            </div>
                        </div>
                    </Link>
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
                <div className="textprd">
                    <h2>
                        COLLECTIONS /ALL PRODUCTS/ M·A·C LOCKED KISS INK 24HR LIPCOLOUR
                    </h2>
                </div>
                <div className="mainprd">

                    <div className="secondprd">
                        {getProducts.images && getProducts.images[0] && (
                            <img src={getProducts.images[0]} alt="" />
                        )}
                        {getProducts.images && getProducts.images[1] && (
                            <img src={getProducts.images[1]} alt="" />
                        )}

                    </div>

                    <div className="secondprdtext">
                        <h1>
                            {getProducts.product_name}
                        </h1>
                        <h2>₹ {getProducts.price}</h2>
                        <h3>A kissproof, transfer-proof and waterproof liquid lipstick with 24 hours of weightless wear and rich matte colour
                            Category: Makeup</h3>



                        <div className="thirdprd">
                            <h1>Stock : {getProducts?.stoke}</h1>
                        </div>
                        <div className="fourthprd">
                            FREE SHIPPING & UPI AVAILABLE
                        </div>
                        <div className="fifthprd">
                            SHOP WORTH ₹3,000 & GET A SELF CARE GLOW KIT*
                            SHOP 15% OFF ON ₹5,000*
                        </div>


                        <div className="mainbuttons">
                            <div className="editbuttonprd">
                                <Link>
                                    <button onClick={addToCart}>CART</button>
                                </Link>
                            </div>
                            <div className="Deletebuttonprd">

                                <button onClick={addToWishList}>
                                    WISHLIST</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



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
    )
}
export default ProductDataFullInCustomer