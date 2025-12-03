import React from "react";
import Image from "next/image";
import styles from "./LogoList.module.css";

const partnerLogos = [
  {
    src: "/partners/27.png",
    alt: "persft",
    
  },
  {
    src: "/partners/26.png",
    alt: "Persftdnfn",
   // link: "https://labelpethakamsetti.com/home",
  },
  { src: "/partners/19.jpg", alt: "Partner 19" },
  // { src: "/partners/20.png", alt: "Partner 20" },
  // { src: "/partners/21.jpg", alt: "Partner 21" },
  // { src: "/partners/22.jpg", alt: "Partner 22" },
  { src: "/partners/23.jpg", alt: "Partner 23" },
  { src: "/partners/24.png", alt: "Partner 24" },
  { src: "/partners/25.png", alt: "Partner 25" },
  { src: "/partners/1.jpg", alt: "Partner 1" },
  { src: "/partners/2.jpg", alt: "Partner 2" },
  { src: "/partners/3.jpg", alt: "Partner 3" },
  { src: "/partners/4.jpg", alt: "Partner 4" },
  { src: "/partners/5.jpg", alt: "Partner 5" },
  { src: "/partners/6.jpg", alt: "Partner 6" },
  { src: "/partners/7.jpg", alt: "Partner 7" },
  { src: "/partners/8.jpg", alt: "Partner 8" },
  { src: "/partners/9.jpg", alt: "Partner 9" },
  { src: "/partners/10.jpg", alt: "Partner 10" },
  { src: "/partners/11.jpg", alt: "Partner 11" },
  // { src: "/partners/12.jpg", alt: "Partner 12" },
  // { src: "/partners/14.jpg", alt: "Partner 14" },
  // { src: "/partners/15.jpg", alt: "Partner 15" },
  // { src: "/partners/16.jpg", alt: "Partner 16" },
  { src: "/partners/17.jpg", alt: "Partner 17" },
  // { src: "/partners/18.jpg", alt: "Partner 18" },
];

export default function LogoList() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {partnerLogos.map((partnerLogo, index) => (
          <div key={index} className={styles.logoCard}>
            {partnerLogo.link ? (
              <a
                href={partnerLogo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={partnerLogo.src}
                  alt={partnerLogo.alt}
                  width={120}
                  height={80}
                  className={styles.logoImage}
                />
              </a>
            ) : (
              <Image
                src={partnerLogo.src}
                alt={partnerLogo.alt}
                width={120}
                height={80}
                className={styles.logoImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
