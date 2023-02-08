import { Link } from "react-router-dom";
import logo from "../../assets/media/OpenBarLogo.png";

const Header = () => {
  return (
    <header className=" w-screen flex justify-center items-center p-2 fixed backdrop-blur-sm">
      <Link to="/home">
        <img src={logo} alt="" className=" w-24" />
      </Link>
    </header>
  );
};

export default Header;
