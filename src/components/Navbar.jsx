import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import First from "../assets/images/1.svg";
import Second from "../assets/images/2.svg";
import Third from "../assets/images/3.svg";
import Fourth from "../assets/images/4.svg";
import Fifth from "../assets/images/5.svg";
import Rus from "../assets/images/russian.svg";
import Eng from "../assets/images/america.svg";

const serviceItems = [
  { label: "Services", disabled: true },
  {
    label: (
      <Link
        to="/services/mobile-apps"
        className="flex w-52 items-center gap-3 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white"
      >
        <img src={First} alt="Development of mobile applications" />
        <p className="text-sm hover:text-white">
          Development of mobile applications
        </p>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to="/services/erp-systems"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <img src={Second} alt="Development and implementation ERP systems" />
        <p className="text-sm">Development and implementation ERP systems</p>
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link
        to="/services/ui-ux-design"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <img src={Third} alt="User interface, User experience design" />
        <p className="text-sm">User interface, User experience design</p>
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link
        to="/services/it-consulting"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <img src={Fourth} alt="IT consulting" />
        <p className="text-sm">IT consulting</p>
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link
        to="/services/it-optimization"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <img src={Fifth} alt="Optimization IT consulting infrastructure" />
        <p className="text-sm">Optimization IT consulting infrastructure</p>
      </Link>
    ),
    key: "4",
  },
];

const portfolioItems = [
  { label: "Portfolio", disabled: true },
  {
    label: (
      <Link
        to="/portfolio/delever"
        className="flex w-52 items-center gap-3 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl font-extrabold text-orange-600">
          D
        </div>
        <p className="text-sm">Delever</p>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to="/portfolio/sms"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-extrabold text-blue-600">
          S
        </div>
        <p className="text-sm">Sms.uz</p>
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link
        to="/portfolio/goodzone"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl font-extrabold text-red-700">
          G
        </div>
        <p className="text-sm">Goodzone</p>
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link
        to="/portfolio/iman"
        className="flex w-52 items-center gap-3 px-2 py-2 hover:bg-blue-600 hover:text-white"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-extrabold text-green-600">
          I
        </div>
        <p className="text-sm">Iman</p>
      </Link>
    ),
    key: "3",
  },
];
const languageItems = [
  { label: "Portfolio", disabled: true },
  {
    label: (
      <Link className="flex w-52 items-center gap-5 px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white">
        <img className="h-12 w-12" src={Rus} alt="Russian Flag" />
        <p className="text-sm">Рус</p>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="flex w-52 items-center gap-5 px-2 py-2 hover:bg-blue-600 hover:text-white">
        <img className="h-12 w-12" src={Eng} alt="America Flag" />
        <p className="text-sm">Eng</p>
      </Link>
    ),
    key: "1",
  },
];

const Navbar = () => {
  return (
    <div className="fixed w-full border-b z-50 border-[#e5e9f2] bg-white shadow-sm">
      <div className="mx-auto px-4 max-w-6xl">
        <nav className="flex h-[72px] items-center justify-between">
          <div>
            <Link to="/">
              <img className="h-8 w-24" src={Logo} alt="Site Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/direction"
                  className="py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Direction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/command"
                  className="py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Command
                </NavLink>
              </li>
              <li>
                <Dropdown menu={{ items: serviceItems }}>
                  <NavLink
                    to="/services"
                    className="flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Services
                      <DownOutlined />
                    </Space>
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  to="/tools"
                  className="py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Tools
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clients"
                  className="py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                  // activeClassName="border-b-2 border-[#1b5bf7]"
                >
                  Clients
                </NavLink>
              </li>
              <li>
                <Dropdown menu={{ items: portfolioItems }}>
                  <NavLink
                    to="/portfolio"
                    className="flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Portfolio
                      <DownOutlined />
                    </Space>
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items: languageItems }}>
                  <NavLink
                    to="/languages"
                    className="flex items-center py-[10px] text-sm font-bold leading-5 hover:border-b-2 hover:border-[#1b5bf7]"
                    // activeClassName="border-b-2 border-[#1b5bf7]"
                  >
                    <Space>
                      Languages
                      <DownOutlined />
                    </Space>
                  </NavLink>
                </Dropdown>
              </li>
            </ul>
            <button className="h-10 w-28 rounded-lg bg-[#1b5bf7] text-sm font-bold leading-5 text-white transition-transform duration-150 hover:scale-[1.05]">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
