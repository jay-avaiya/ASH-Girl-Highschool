import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "../../components/Search";
import { useState } from "react";
import { Menu, X, Search as SearchIcon } from "lucide-react";
const Navbar = () => {
  const navBar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Trust Body",
      path: "/trust-body",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Career",
      path: "/career",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Admission",
      path: "/admission",
    },
  ];

  const mobileNav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Trust Body",
      path: "/trust-body",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Gallery",
      path: "/events",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Admission",
      path: "/admission",
    },
    {
      name: "Admission From",
      path: "/process",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full h-fit">
      {/* Desktop */}
      <div className="bg-white text-black">
        {/* Top header */}
        <div className="bg-[#1C375E] px-8 py-1 md:px-8 md:py-2 lg:px-14 lg:py-4- xl:px-14 xl:py-[12px]">
          <div className="flex justify-center md:justify-between items-center text-center ">
            <p className="text-[10px]  md:text-[12px] lg:text-[18px] font-montserrat font-medium text-white">
              Admission open for Std. 1 to 12 on Ash Education Trust Vijapur
            </p>

            <div className="hidden md:block">
              <Search />
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="hidden lg:flex lg:px-14 lg:py-2 xl:px-14 items-center justify-between">
          <img
            onClick={() => navigate("/")}
            src="/logo.png"
            alt="logo"
            className="lg:h-[70px] lg:w-[160px] xl:h-[125px] xl:w-[244px] cursor-pointer object-cover scale-110 translate-y-1"
          />

          <ul className="text-black flex items-center justify-between lg:gap-4 xl:gap-6 2xl:gap-6 list-none lg:text-[12px] xl:text-[17px]  font-medium font-montserrat">
            {navBar.map((item, index) => {
              let isActive;

              if (item.path === "/") {
                isActive = location.pathname === "/";
              } else {
                isActive = location.pathname.startsWith(item.path);
              }

              return (
                <li key={index} className="relative group cursor-pointer">
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#CC4237]"
                        : "text-black group-hover:text-[#CC4237]"
                    }`}
                  >
                    {item.name}
                  </Link>

                  <span
                    className={`absolute left-0 -bottom-3 h-[3px] rounded-lg bg-[#CC4237] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              );
            })}

            <button
              className="cursor-pointer text-white bg-[#CC4237] lg:text-[16px] xl:text-[18px] font-medium font-montserrat py-1 px-6 border border-transparent rounded-full hover:bg-transparent hover:border hover:border-[#CC4237] hover:text-[#CC4237] transition-all duration-300 text-center"
              onClick={() => navigate("/alumni")}
            >
              Alumni
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden md:px-8 md:py-2 w-full flex items-center justify-between px-3 py-1">
        <button onClick={() => setIsOpen(true)} className="text-[#1C375E]">
          <Menu size={20} />
        </button>

        <img
          onClick={() => navigate("/")}
          src="/logo.png"
          alt="logo"
          className="w-[78px] h-[45px] md:w-[140px] md:h-[60px] object-cover cursor-pointer"
        />

        <button
          onClick={() => setShowMobileSearch(true)}
          className="w-[25px] h-[25px] rounded-full shrink-0 flex items-center justify-center text-white bg-[#CC4237] md:hidden"
        >
          <SearchIcon size={12} />
        </button>

        <div
          className={` fixed inset-0 bg-[#1C375E] text-white z-50 transform transition-all duration-300 flex flex-col gap-3.5 px-5 py-8 ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="text-[20px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

          <div className="w-full flex flex-col gap-3">
            {mobileNav.map((item, index) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <div
                  key={index}
                  className={`w-full px-4 py-4 border-b border-white/50 hover:bg-[#284C80] hover:rounded-[13px] hover:border-transparent`}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={item.path}
                    className="font-montserrat font-medium text-[16px]"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}

            <button
              onClick={() => {
                navigate("/alumni");
                setIsOpen(false);
              }}
              className="w-full bg-[#CC4237] py-2 sm:py-3 md:py-4 rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-medium"
            >
              Alumni
            </button>
          </div>
        </div>
      </div>

      {showMobileSearch && (
        <div
          className="fixed inset-0 bg-black/40 z-[999] flex items-center justify-center p-4"
          onClick={() => setShowMobileSearch(false)}
        >
          <div
            className="bg-white w-full max-w-md p-4 rounded-2xl flex items-center gap-3 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            />

            <button
              onClick={() => setShowMobileSearch(false)}
              className="text-[#F94223] text-xl"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
