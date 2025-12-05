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
    "Big Careers solutions | Fuelling Business Growth with Next Generation Innovation.",
  description:
    "Big Careers  Solutions delivers end-to-end IT services, corporate training, and manpower staffing solutions for enterprises, MSMEs, startups, and job seekers. Specializing in AI, ML, Automation, Cloud, Salesforce, Data Engineering, and full-stack staffing solutions.",
    keywords: [
    "IT Training",
    "Corporate Training",
    "Job-Oriented Training",
    "Staffing Services",
    "IT Staffing",
    "Contract Staffing",
    "Professional Hiring",
    "IT Services",
    "AI and Machine Learning",
    "Cloud Solutions",
    "DevOps Consulting",
    "Salesforce Services",
    "IoT Solutions",
    "Data Engineering Services",
    "Automation",
    "Custom Software Development",
    "Workforce Solutions",
    "Staff Augmentation",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Big Careers solutions |Big Careers  Solutions delivers end-to-end IT services, corporate training, and manpower staffing solutions for enterprises, MSMEs, startups, and job seekers. Specializing in AI, ML, Automation, Cloud, Salesforce, Data Engineering, and full-stack staffing solutions.",
      description:
     "Big Careers  Solutions delivers end-to-end IT services, corporate training, and manpower staffing solutions for enterprises, MSMEs, startups, and job seekers. Specializing in AI, ML, Automation, Cloud, Salesforce, Data Engineering, and full-stack staffing solutions.",
      url: "https://bigcareers.solutions/",
    type: "website",
    image: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Big Careers solutions | IT Services, Training & Manpower Staffing",
    description:
     "Big Careers  Solutions delivers end-to-end IT services, corporate training, and manpower staffing solutions for enterprises, MSMEs, startups, and job seekers. Specializing in AI, ML, Automation, Cloud, Salesforce, Data Engineering, and full-stack staffing solutions.",
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
