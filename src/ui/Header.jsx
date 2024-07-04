// import { HiOutlineUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-3 text-xl text-white">
      <div>
        <Link to="/" className="">
          fruityVice
        </Link>
      </div>

      <div className="flex items-center gap-x-4">
        <Link to="/cart" className="text-2xl">
          <IoCartOutline />
        </Link>
        <Link to="/favorites">
          <MdFavoriteBorder />
        </Link>
      </div>
    </div>
  );
}

export default Header;
