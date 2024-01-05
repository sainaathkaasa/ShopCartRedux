import { Link } from "react-router-dom"
import '../Styles/Advertisement.css'
const Advertisement=()=>{
    return(
        <>
        <div className="Advertise">
            <div className="Advertise content">
                <div className="Advertise contact--logo"><Link to={"tel:+" +1234567890}><i className="fa-solid fa-phone"></i></Link></div>
                <div className="Advertise contact--number">+1234567890</div>
            </div>
            <div className="Advertise content">
                <div className="Advertise ">Get 50% Off on Selected Items |</div>
                <div className="Advertise shopnow"><Link to={""}>Shop Now</Link></div>
            </div>
            <div className="Advertise ">
                <div className="Advertise ">
                    <select name="Language" id="">
                        <option value="">English (USA)</option>
                        <option value="">English (UK)</option>
                        <option value="">Itly</option>
                    </select>
                </div>
                <div className="Advertise ">
                    <select name="country" id="">
                        <option value="">India</option>
                        <option value="">USA</option>
                        <option value="">UK</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}
export default Advertisement