import MenuItems from "./MenuItems"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  return (
    <footer className="section footer">
      <MenuItems/>
      <SocialLinks/>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
