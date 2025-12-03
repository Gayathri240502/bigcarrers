import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <div>
      {title && <h2 className="cs-widget_title">{title}</h2>}

      <div className="cs-menu_widget cs-style1 cs-mp0">
        {/* <p>
          {withIcon && (
            <span className="cs-accent_color">
              <IoMdContact />
            </span>
          )}
          +917674975669
        </p> */}
        {/* <h6>Hyderabad</h6> */}
        <ul>
          <li>
            {withIcon && (
              <span className="cs-accent_color">
                <MdEmail />
              </span>
            )}
            sales@bigcareers.solutions
          </li>
          <li>
            {withIcon && (
              <span className="cs-accent_color">
                <FaLocationDot />
              </span>
            )}
            Survey No. 64, Building Number 9, Mindspace, 13th Floor, Madhapur,
            Hyderabad, Telangana 500081
          </li>
        </ul>
      </div>

      <br />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.8832015413495!2d78.3783061751662!3d17.44126328345518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91db7c0af0c5%3A0xe38b68ebd0e5d51!2sBig%20Careers%20Technologies%20Solutions!5e1!3m2!1sen!2sin!4v1755497535813!5m2!1sen!2sin"
        width="500"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
