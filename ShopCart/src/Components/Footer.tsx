import { Link } from 'react-router-dom'
import '../Styles/Footer.css'

const Footer=()=>{

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }


    return(
        <>
        <div className="footer mainfooter">
            <div className=" footer--pay">
                <div className="footer fotter--pay1">
                <Link to={'/'}><img src="/shopcart_icon.PNG" alt="" height={50} width={130} /></Link>
                </div>
                <div className="fotter fotter--pay2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque dolores rerum placeat. Iure neque est officiis dolor, esse accusamus!
                </div>
                <h3>Accept Payments</h3>
                <div className="fotter fotter--pay3">
                    
                    <div><Link to={''}><i className="fa-brands fa-cc-visa"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-cc-mastercard"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-cc-amazon-pay"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-cc-stripe"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-cc-paypal"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-google-pay"></i></Link></div>
                    <div><Link to={''}><i className="fa-brands fa-cc-apple-pay"></i></Link></div>
                    <div><Link to={''}><i className="fa-solid fa-credit-card"></i></Link></div>

                </div>
            </div>
            <div className="footer footer--contact">
                <div>
                    <h3>Department</h3>
                    <p> <Link to={''}>Fashion</Link></p>
                    <p><Link to={''}>Education Product</Link></p>
                    <p><Link to={''}>Frozen Food</Link></p>
                    <p><Link to={''}>Beverages</Link></p>
                    <p><Link to={''}>Organic Grocery</Link></p>
                    <p><Link to={''}>Office Supplies</Link></p>
                    <p><Link to={''}>Beauty Products</Link></p>
                    <p><Link to={''}>Books</Link></p>
                    <p><Link to={''}>Electronics & Gadget</Link></p>
                    <p><Link to={''}>Travel Accessories</Link></p>
                    <p><Link to={''}>Fitness</Link></p>
                    <p><Link to={''}>Sneakers</Link></p>
                    <p><Link to={''}>Toys</Link></p>
                    <p><Link to={''}>Furniture</Link></p>
                </div>
                <div>
                    <h3>About Us</h3>
                    <p> <Link to={''}>About Shopcart</Link></p>
                    <p><Link to={''}>Careers</Link></p>
                    <p><Link to={''}>News & Blog</Link></p>
                    <p><Link to={''}>Help</Link></p>
                    <p><Link to={''}>Press Center</Link></p>
                    <p><Link to={''}>Shop By Location</Link></p>
                    <p><Link to={''}>ShopCart Brands</Link></p>
                    <p><Link to={''}>Affiliate & Partners</Link></p>
                    <p><Link to={''}>Ideas & Guides</Link></p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p> <Link to={''}>Gift Card</Link></p>
                    <p><Link to={''}>Mobile App</Link></p>
                    <p><Link to={''}>Shipping & Delivery</Link></p>
                    <p><Link to={''}>Order Pickup</Link></p>
                    <p><Link to={''}>Account Signup</Link></p>
                </div>
                <div>
                    <h3>Department</h3>
                    <p> <Link to={''}>Shopcart Help</Link></p>
                    <p><Link to={''}>Returns</Link></p>
                    <p><Link to={''}>Track Orders</Link></p>
                    <p><Link to={''}>Contact Us</Link></p>
                    <p><Link to={''}>Feedback</Link></p>
                    <p><Link to={''}>Security & Fraud</Link></p>
                </div>
            </div>
            <div className='uparrow'>
                <i className="fa-solid fa-arrow-up" onClick={scrollToTop}></i>
            </div>
        </div>
        </>
    )
}
export default Footer