import '../assets/css/General.css'
import '../assets/css/Footer.css'
import Facebook from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import Linkedin from "../assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="footer-container bg-darkblue" style={{borderTop: "solid 5px #100242"}}>
         <img className='cursor-pointer' src={Facebook} alt={"facebook"} width={30} height={30} />
         <img className='cursor-pointer' src={Twitter} alt={"twitter"} width={30} height={30} />
         <img className='cursor-pointer' src={Linkedin} alt={"linkedin"} width={30} height={30} />
    </div>
  )
}
export default Footer
