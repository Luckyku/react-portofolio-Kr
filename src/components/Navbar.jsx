import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaSquareXTwitter, FaInstagram, FaGithub, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" w-100 mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center ">
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>

      <div className=" flex gap-4  text-2xl justify-center items-center ">
        <FaLinkedin/>
        <FaInstagram/>
        <FaXTwitter/>
        <FaGithub/>
      </div>
    </nav>
  );
}

export default Navbar