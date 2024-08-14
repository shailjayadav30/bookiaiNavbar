import logo from "../images/logo.png";
import menu from "../images/menu.png";
import close from "../images/close.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  const navitems = [
    {
      id: 0,
      title: "Features",
      link: "#features",
    },
    {
      id: 1,
      title: "How it Works",
      link: "#",
    },
    {
      id: 2,
      title: "Roadmap",
      link: "#",
    },
    {
      id: 3,
      title: "Api",
      link: "#",
    },
    {
      id: 4,
      title: "Price",
      link: "#",
    },
    {
      id: 5,
      title: "Models",
      link: "#",
    },
  ];
  return (
    <div className=" mt-2  w-full  flex justify-between p-2 ">
      <div>
        <div className="flex items-center justify-center ml-[1rem]  lg:ml-10">
          <img src={logo} alt="" className="h-12" />
          <p className="text-white text-3xl  font-semibold">BookAi</p>
        </div>
      </div>
      {/*desktop navbar*/}
      <nav className={` items-center gap-10 mr-12  lg:flex hidden `}>
        <ul className="text-white lg:flex text-lg cursor-pointer  hidden space-x-10  ">
          {navitems.map((item) => (
            <a 
              className="active:text-[#8a2be2] focus:text-[#8a2be2] "
            
            href = {item.link} key={item.id}>{item.title}</a>
          ))}
        </ul>
        <button className="bg-[linear-gradient(45deg,_#726bff,_#57b6fe)]   p-3 text-lg  font-semibold rounded text-white">
          Login/SignUp
        </button>
      </nav>
      {/*mobile navbar*/}
      <img
        src={menu}
        onClick={toggleNavbar}
        alt=""
        className="h-10 mt-2 mr-2 cursor-pointer block lg:hidden "
      />
      <nav
        className={`backdrop-blur-lg bg-[linear-gradient(135deg,_#1e0533,_#110a1f)] h-[23rem] w-[12rem] pt-4 flex flex-col items-center  justify-center fixed top-2 right-2 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <img
          src={close}
          onClick={toggleNavbar}
          className="h-10 absolute top-0 left-0  cursor-pointer"
          alt=""
        />
        <ul className="text-white  cursor-pointer  gap-4 flex flex-col items-center ">
        {navitems.map((item) => (
            <a 
              className="active:text-[#8a2be2] focus:text-[#8a2be2]"
            
            href = {item.link} key={item.id}>{item.title}</a>
          ))}
        </ul>
        <button className="mt-4 bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] text-lg  font-semibold rounded text-white p-2 w-[8rem]">
          Login/SignUp
        </button>
      </nav>
    </div>
  );
};

export default Navbar;


