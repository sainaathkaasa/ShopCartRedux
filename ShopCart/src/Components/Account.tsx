import { Link } from 'react-router-dom'
import '../Styles/Account.css'
const Account=()=>{
    return(
        <>
        <div className='Account-details'>
            <div className="x">
                <Link to={'/'}><i className="fa-solid fa-x"></i></Link>
            </div>
            <div className="Accout-details">
                <div className=" Avathar"><img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?resize=400x300&vertical=center" alt="" height={170} width={200}/></div>
                <div className=" Name">Name : ABC</div>
                <div className="Email">Email : abc@gmail.com</div>
            </div>
        </div>
        </>
    )
}
export default Account