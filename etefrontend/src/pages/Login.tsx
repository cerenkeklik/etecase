import '../assets/css/Login.css'
import '../assets/css/General.css'
import LoginImage from "../assets/images/login.png";
import LoginRegisterComponent from '../components/LoginRegisterComponent'

const Login = ({flip, setFlip}: {flip: boolean, setFlip: any}) => {
  return (
    <div className="login-container">
      <div className="container-left">
        <img src={LoginImage} alt='reps' className='login-img'/>
      </div>
      <div className="container-right">
        <LoginRegisterComponent flip={flip} setFlip={setFlip} />
      </div>
    </div>
  )
}
export default Login
