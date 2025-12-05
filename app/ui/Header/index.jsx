"use client";
import { useEffect, useState } from "react";
import Div from "../Div";
import Link from "next/link";
import DropDown from "./DropDown";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import SocialWidget from "../Widget/SocialWidget";
import Image from "next/image";
import { navLinks } from "./data";
import { RiContactsFill } from "react-icons/ri";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className={item.children ? "menu-item-has-children" : ""}>
        <Link
          href={item.href}
          onClick={() => setMobileToggle(false)}
          className="nav-link"
        >
          {item.label}
        </Link>
        {item.children && (
          <DropDown>
            <ul>{renderNavItems(item.children)}</ul>
          </DropDown>
        )}
      </li>
    ));
  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              {/* Branding Section */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link href="/">
                  <Image
                    src="/logo-bg1.png"
                    alt="Logo"
                    width={100}
                    height={200}
                    style={{ marginRight: "10px" }} // Adds space between image and text
                  />
                </Link>
                {/* <Link href="/">
                  <h5 style={{ margin: 0 }}>
                    Big Careers Technology solutions
                  </h5>{" "}
                 
                </Link> */}
              </div>

              {/* Navigation Section */}
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: mobileToggle ? "block" : "none" }}
                  >
                    {renderNavItems(navLinks)}
                  </ul>
                  <span
                    className={`cs-munu_toggle ${
                      mobileToggle ? "cs-toggle_active" : ""
                    }`}
                    onClick={() => setMobileToggle(!mobileToggle)
                    
                  }
                  style={{ color: "#ee751f" }}   
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              {/* Toolbox Section */}
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span onClick={() => setSideHeaderToggle(!sideHeaderToggle)}>
                    <RiContactsFill
                      style={{ fontSize: "2rem", color: "FE5820" }}
                    />
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      {/* Side Header Section */}
      <Div className={`cs-side_header ${sideHeaderToggle ? "active" : ""}`}>
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape flex" />
          <Link className="flex items-center justify-center" href="/">
            <Image src="/logo-bg.png" alt="Logo" width={100} height={100} />
            <h2 className="mt-4 text-lg">Big Careers Technology solutions </h2>
          </Link>

          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
