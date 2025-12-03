import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "swiper/css";
import CustomCursor from "./ui/CustomCursor";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});
export const metadata = {
  title:
    "Big Careers Technology solutions | Fuelling Business Growth with Next Generation Innovation.",
  description:
    "Big Careers Technology solutions offers innovative AI, Cloud, Data Engineering, DevOps, and Custom Software Development solutions to transform businesses and optimize operations.",
  keywords: [
    "AI Solutions",
    "Cloud Solutions",
    "Custom Software Development",
    "AI Development",
    "Business Intelligence",
    "Data Engineering",
    "DevOps Solutions",
    "IoT Solutions",
    "Workforce Management",
    "Automation",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Big Careers Technology solutions | Custom Software and AI Solutions",
    description:
      "Big Careers Technology solutions provides cutting-edge AI, cloud, and custom software development solutions to businesses looking to enhance performance and drive digital transformation.",
    url: "https://bigcareers.solutions/",
    type: "website",
    image: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Big Careers Technology solutions | Custom Software and AI Solutions",
    description:
      "Big Careers Technology solutions offers AI, cloud, and custom software solutions to drive business transformation and enhance operational efficiency.",
    image: "/logo.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        <Header />
        <CustomCursor />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
