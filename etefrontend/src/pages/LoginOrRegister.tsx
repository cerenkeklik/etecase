import ReactCardFlip from "react-card-flip";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import "../assets/css/General.css";

const LoginOrRegister = () => {
    const [flip, setFlip] = useState<boolean>(false)
    return(
       <div className="minh-90 loginorregister-container">
         <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <Login setFlip={setFlip} flip={flip} />
            <Register setFlip={setFlip} flip={flip} />
        </ReactCardFlip>
       </div>
    )
}
export default LoginOrRegister;