import LoginRegisterComponent from "../components/LoginRegisterComponent";
import RegisterImage from "../assets/images/register.png";

const Register = ({flip, setFlip}: {flip: boolean, setFlip: any}) => {
    return(
        <div className="login-container">
        <div className="container-left">
          <img src={RegisterImage} alt='reps' className='login-img'/>
        </div>
        <div className="container-right">
          <LoginRegisterComponent flip={flip} setFlip={setFlip} />
        </div>
      </div>
    )
}
export default Register;