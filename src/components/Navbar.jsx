import logo from '../images/logo.svg'
import SocialLinks from './SocialLinks'
import MenuItems from './MenuItems'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <MenuItems/>

        <SocialLinks/>
      </div>
    </nav>
  )
}
export default Navbar
