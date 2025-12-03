import React from "react";
import Image from "next/image";
import Link from "next/link";
import Div from "../Div";
import {
  FaLinkedin,
  FaSquareXTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        <Image
          src={memberImage}
          alt={memberName}
          width={100}
          height={100}
          style={{ width: "500px", height: "500px", objectFit: "cover" }}
        />

        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <Link href="/team/team-details">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      {/* <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <Link href={memberSocial.linkedin}>
            <FaLinkedin />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link href={memberSocial.twitter}>
            <FaSquareXTwitter />
          </Link>
        )}
        {memberSocial.youtube && (
          <Link href={memberSocial.youtube}>
            <FaYoutube />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link href={memberSocial.facebook}>
            <FaFacebook />
          </Link>
        )}
      </Div> */}
    </Div>
  );
}
