import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../../assets/media/OpenBarLogo.png";

const Header = () => {
    const a = useParams()
    console.log(a)
  return (
    <header className=" w-screen flex justify-center items-center pt-5 fixed">
      <Link to="/home">
        <img src={logo} alt="" className=" w-24" />
      </Link>
    </header>
  );
};

export default Header;
