"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import img from "../assets/react.svg";
import raj from "../assets/profile.jpg";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <Navbar fluid className="bg-green-500">
      <Navbar.Brand href="">
        <img src={img} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={raj} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Rajvardhan</span>
            <span className="block truncate text-sm font-medium">
              Raj@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          active={location.pathname === "/"}
          className="text-white text-base duration-300"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/carslist"
          active={location.pathname === "/carslist"}
          className="text-white text-base duration-300"
        >
          Cars List
        </Navbar.Link>
        <Navbar.Link
          href="#"
          active={location.pathname === "/services"}
          className="text-white text-base duration-300"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#"
          active={location.pathname === "/pricing"}
          className="text-white text-base duration-300"
        >
          Pricing
        </Navbar.Link>
        <Navbar.Link
          href="#"
          active={location.pathname === "/contact"}
          className="text-white text-base duration-300"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
