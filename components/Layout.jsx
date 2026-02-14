import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        {/* 1. THE BROWSER TAB TITLE */}
        <title>Sreedarsh T M | RS and GIS Researcher</title>
        
        {/* 2. GOOGLE SEARCH DESCRIPTION */}
        <meta
          name="description"
          content="Sreedarsh T M is a Geoinformatics Researcher and M.Tech graduate specializing in Remote Sensing, Deep Learning, and Google Earth Engine."
        />
        
        {/* 3. KEYWORDS FOR SEO */}
        <meta
          name="keywords"
          content="geoinformatics, remote sensing, gis, google earth engine, python, deep learning, research, portfolio, spatial analysis, arcgis, qgis, isro"
        />
        
        {/* 4. AUTHOR */}
        <meta name="author" content="Sreedarsh T M" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;