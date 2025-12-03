import React from "react";
import Link from "next/link";

export default function SideMenuWidget({ title, data }) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <ul className="cs-side_menu_widget">
        {data?.map((item, index) => (
          <li key={index}>
            <Link href={item.url} key={index}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
