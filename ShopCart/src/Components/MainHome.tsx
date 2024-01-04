import { Link } from 'react-router-dom'
import '../Styles/MainHome.css'
const MainHome=()=>{
    return(
        <>
        <div className="main--image">
            <div className='heading'>Shopping and Department Store.</div>
            <div className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aliquid debitis. Excepturi eveniet consectetur odio. Iusto ea consequuntur minus nulla.</div>
            <div> <Link to={''}><button className='learnmore--but'>Learn More</button></Link> </div>

        </div>
        </>
    )
}
export default MainHome