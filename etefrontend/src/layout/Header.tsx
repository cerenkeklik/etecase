import Logo from '../assets/images/logo.png'
import '../assets/css/General.css'
import '../assets/css/Header.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  let { pathname } = useLocation()
  let nav = useNavigate()
  return (
    <div
      className="h-10 bg-gray"
      style={{
        boxShadow: '0px 5px #100242',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img src={Logo} alt="handleitlogo" className="h-100" />
      {pathname !== '/' && (
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            paddingRight: '50px',
            color: '#100242',
            fontWeight: 500,
          }}
        >
          <div
            onClick={() => nav('/dashboard')}
            className="nav-tab active-nav-tab"
          >
            Dashboard
          </div>
          <div onClick={() => nav('/companies')} className="nav-tab">
            Companies
          </div>
          <div onClick={() => nav('/products')} className="nav-tab">
            Products
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
