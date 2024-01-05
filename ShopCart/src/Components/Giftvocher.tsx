import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Giftvocher.css'
const Giftvocher = () => {
    
    return (
        <>
        <Link to={'/'}>
        <div className='Giftvocher-details'>
                <div className="vocher-details">
                    <div className=" Avathar"><img src="https://media.istockphoto.com/id/183764681/photo/3d-gift-card.jpg?s=612x612&w=0&k=20&c=1BYwK8Q6IjHLT0ujI7PSLFCnjR76HfUZ3Wud8xrEyas=" alt="" height={250} width={500} /></div>
                    You Have Won Gift Card

                </div>

            </div>
        </Link>
            
        </>
    )
}
export default Giftvocher