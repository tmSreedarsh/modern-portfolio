import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// IMPORT ICONS
import { 
  FaPython, 
  FaGitAlt, 
  FaGlobeAmericas,
  FaHandPointLeft
} from "react-icons/fa";

import { 
  SiGoogleearth, 
  SiArcgis, 
  SiQgis, 
  SiVisualstudiocode,
  SiGooglecolab,
  SiGithub,
  SiOpenai,   
  SiGoogle,   
  SiMicrosoft 
} from "react-icons/si";

import Circles from "../../components/Circles";

// DATA
export const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "GIS & Remote Sensing",
        icons: [SiArcgis, SiQgis, SiGoogleearth, FaGlobeAmericas],
      },
      {
        title: "Coding & Dev Tools",
        icons: [FaPython, SiVisualstudiocode, SiGooglecolab, FaGitAlt, SiGithub],
      },
      {
        title: "GenAI & Office",
        icons: [SiOpenai, SiGoogle, SiMicrosoft],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Independent Researcher",
        stage: "June 2025 - Present",
        description: [
            "Preparing for UGC NET & exploring AI integration in GIS.",
            "Working on a research paper regarding Coastal Vulnerability.",
            "Enhancing technical proficiency in Python & Deep Learning."
        ]
      },
      {
        title: "Project Intern - NRSC, ISRO",
        stage: "Jan 2025 - June 2025",
        description: [
            "Project: 'Burned Area Extraction using AI & ML (Deep Learning)'.",
            "Created a labeled training dataset for identifying burned areas.",
            "Processed satellite imagery using Google Colab and Earth Engine API."
        ]
      },
    ],
  },
  {
    title: "Education",
    info: [
      { 
        degree: "M. Tech", 
        university: "Bharathidasan University", 
        specialization: "Geoinformatics", 
        year: "2025" 
      },
      { 
        degree: "M. Sc", 
        university: "Mangalore University", 
        specialization: "Geography", 
        year: "2023" 
      },
      { 
        degree: "B. Sc", 
        university: "Kannur University", 
        specialization: "Geography\nSub: Geology, Statistics", 
        year: "2021" 
      },
      { 
        degree: "VHSE", 
        university: "Kerala Board of VHSE", 
        specialization: "ABFS (Science)\nAgri, Bio, Chem, Physics", 
        year: "2018" 
      },
    ],
  },
  {
    title: "Research Focus",
    info: [
      { title: "My Vision", stage: "Aspiring to be a Versatile Researcher" },
      { title: "Key Interests", stage: "Disaster Management, Spatial Analysis & Geo-AI" },
    ],
  },
  {
    title: "Projects",
    info: [
      {
        title: "Burned Area Extraction (Major Project)",
        stage: "AI & Deep Learning",
        description: ["Applied DL algorithms to automate detection from satellite imagery."]
      },
      {
        title: "Landslide Susceptibility (Mini Project)",
        stage: "Machine Learning",
        description: ["Bivariate analysis & ML mapping in Kodaikanal region."]
      },
      {
        title: "Coastal Vulnerability (M.Sc Project)",
        stage: "Geospatial Analysis",
        description: ["Analyzed coastal changes for Kasaragod and Kannur regions."]
      },
    ],
  },
  {
    title: "Publications",
    info: [
      {
        title: "Prioritization of Flood Susceptibility Zones",
        stage: "Book Chapter (2025)",
        description: ["Publisher: Taylor & Francis (CRC Press).", "Method: MCDM, TOPSIS, and CF Model."]
      },
      {
        title: "Coastal Vulnerability Assessment",
        stage: "Manuscript in Prep",
        description: ["Authors: T.M. Sreedarsh & Poojith Kumar D P.", "Target: Book Chapter."]
      },
    ],
  },
  {
    title: "Conferences",
    info: [
      {
        title: "Site Suitability for Solid Waste Disposal",
        stage: "Dec 2024",
        description: ["13th Intl Conference (UGIT), Bangalore University."]
      },
      {
        title: "Coastal Vulnerability Assessment",
        stage: "Oct 2023",
        description: ["Intl Conference (CWGHSCC), Lovely Professional Univ."]
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "IIRS - ISRO Outreach",
        stage: "2023 - 2024",
        description: [
          "LIDAR Data Processing & Applications (Grade: A+) | Aug 2024",
          "Geo-data Sharing & Cyber Security (Grade: A+) | Dec 2023",
          "AI/ML for Geodata Analysis | Aug 2024",
          "Geodata Processing using Python | Jan 2024",
          "Geospatial Analysis using Google Earth Engine | Feb 2024",
          "Potential of NISAR for Disaster Mitigation | July 2024",
          "Exploring Earth's Moon through Chandrayaan | Feb 2024"
        ]
      },
      {
        title: "NASA ARSET",
        stage: "International",
        description: [
          "SeaDAS 8.4.1 for Water Quality Monitoring | Feb 2024",
          "Spectral Indices for Land & Aquatic using QGIS | Feb 2025"
        ]
      },
      {
        title: "NRSC - ISRO (Bhuvan)",
        stage: "Workshops",
        description: [
          "Online Workshop on Bhoonidhi | Oct 2024",
          "Bhuvan Overview (Advanced) | Sept 2023",
          "Bhuvan Overview (Introductory) | May 2023"
        ]
      },
      {
        title: "Esri MOOC",
        stage: "ArcGIS Ecosystem",
        description: [
          "Going Places with Spatial Analysis (6 Weeks) | March 2024",
          "GIS for Climate Action (6 Weeks) | Nov 2023"
        ]
      },
      {
        title: "Professional Development",
        stage: "Other",
        description: [
          "AI for Space Application (Hex-Star Universe) | Feb 2025",
          "Managing Bathymetric Data in ArcGIS Pro | Dec 2023",
          "Teaching Web-Based Modern GIS | Sept 2023",
          "Research Article Screening Process (IARA) | Aug 2023"
        ]
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    // MASTER LAYOUT: 
    // h-full: Fills the layout viewport while keeping internal section scrolling.
    // flex flex-col: Stacks elements vertically.
    <div className="h-full bg-primary/30 text-center xl:text-left relative z-10 flex flex-col overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Circles />
      </div>

      <div className="container mx-auto h-full flex flex-col px-4 sm:px-6 md:px-8 xl:px-0 relative z-20">
        
        {/* 1. HEADER SPACER */}
        {/* Pushes everything down so it doesn't hide behind your name */}
        <div className="shrink-0 h-[168px] sm:h-[176px] lg:h-[120px] xl:h-[150px]"></div>

        {/* 2. MAIN CONTENT (Expands to fill space) */}
        {/* min-h-0 is CRITICAL: It allows the inner content to scroll while the parent stays fixed. */}
        <div className="flex-1 flex flex-col min-h-0">
            
            {/* TABS ROW */}
            <div className="shrink-0 mb-3 xl:mb-6">
                <div className="relative">
                <div className="flex flex-nowrap md:flex-wrap xl:flex-nowrap overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory justify-start gap-2 sm:gap-3 md:gap-x-4 md:gap-y-2 xl:gap-x-6 border-b border-white/10 pb-2 pr-6 md:pr-0 items-center">
                    {aboutData.map((item, itemI) => (
                    <div
                        key={itemI}
                        className={`${
                        index === itemI &&
                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                        } cursor-pointer text-xs sm:text-sm xl:text-base relative after:w-6 sm:after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 whitespace-nowrap flex-shrink-0 snap-start transition-all duration-300 py-1 px-1 hover:text-white font-medium`}
                        onClick={(e) => {
                            setIndex(itemI);
                            e.currentTarget.scrollIntoView({
                              behavior: "smooth",
                              inline: "center",
                              block: "nearest",
                            });
                        }}
                    >
                        {item.title}
                    </div>
                    ))}
                </div>
                <div className="md:hidden pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-primary/80 to-transparent" />
                </div>
                <div className="md:hidden mt-1 text-white/40 text-[10px] italic flex items-center justify-center gap-2 animate-pulse">
                    <FaHandPointLeft /> Swipe tabs to view more
                </div>
            </div>

            {/* SCROLLABLE LIST AREA */}
            {/* This div handles the scrolling. The counters below are OUTSIDE this div. */}
            <div className="flex-1 overflow-y-auto no-scrollbar pr-1 sm:pr-2 pb-2 sm:pb-4">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-y-4 items-center xl:items-start"
                >
                    {/* TABLE LOGIC */}
                    {aboutData[index].title === 'Education' ? (
                        <div className="w-full flex flex-col">
                            <div className="w-full overflow-x-auto rounded-lg border border-white/10 bg-white/5 relative shadow-lg">
                                <table className="w-full text-left text-white/80 border-collapse min-w-[520px] md:min-w-[680px]">
                                    <thead>
                                        <tr className="bg-white/10 text-accent text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
                                            <th className="py-2.5 px-2 sm:px-3 md:px-4 font-bold border-b border-white/10">Degree</th>
                                            <th className="py-2.5 px-2 sm:px-3 md:px-4 font-bold border-b border-white/10">University</th>
                                            <th className="py-2.5 px-2 sm:px-3 md:px-4 font-bold border-b border-white/10">Stream</th>
                                            <th className="py-2.5 px-2 sm:px-3 md:px-4 font-bold border-b border-white/10">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {aboutData[index].info.map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors text-[10px] sm:text-xs md:text-sm">
                                                <td className="py-2.5 px-2 sm:px-3 md:px-4 font-bold text-white whitespace-nowrap">{row.degree}</td>
                                                <td className="py-2.5 px-2 sm:px-3 md:px-4">{row.university}</td>
                                                <td className="py-2.5 px-2 sm:px-3 md:px-4 whitespace-pre-wrap leading-relaxed">{row.specialization}</td>
                                                <td className="py-2.5 px-2 sm:px-3 md:px-4 text-accent font-bold whitespace-nowrap">{row.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="md:hidden mt-2 text-white/40 text-[9px] sm:text-[10px] italic flex items-center justify-center gap-2 animate-pulse">
                                <FaHandPointLeft /> Swipe table to see details
                            </div>
                        </div>
                    ) : (
                        // LIST LOGIC
                        aboutData[index].info.map((item, itemI) => (
                            <div
                                key={itemI}
                                className="w-full flex flex-col lg:flex-row lg:items-start gap-y-2 lg:gap-x-6 text-center lg:text-left text-white/70"
                            >
                                <div className="font-light mb-1 lg:mb-0 text-white lg:min-w-[180px] font-bold text-[13px] sm:text-[14px] md:text-[15px]">
                                    {item.title}
                                </div>
                                
                                <div className="flex flex-col items-center lg:items-start w-full">
                                    <div className="flex flex-col lg:flex-row gap-x-2 items-center mb-1">
                                        <div className="hidden lg:flex text-white/40">-</div>
                                        <div className="lg:hidden mb-1 text-accent font-semibold text-xs">{item.stage}</div>

                                        <div className="flex flex-wrap gap-x-4 justify-center lg:justify-start">
                                            {item.icons?.map((Icon, iconI) => (
                                                <div key={iconI} className="text-2xl text-white hover:text-accent transition-all duration-300">
                                                    <Icon />
                                                </div>
                                            ))}
                                            {!item.icons && <div className="hidden lg:flex text-accent font-semibold text-sm">{item.stage}</div>}
                                        </div>
                                    </div>

                                    {item.description && (
                                        <ul className="text-[11px] sm:text-xs md:text-sm text-white/60 italic list-none lg:list-disc lg:pl-5 space-y-2 mt-1 leading-relaxed text-center lg:text-left">
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </motion.div>
            </div>
        </div>

        {/* 3. BOTTOM: COUNTERS */}
        {/* REMOVED: bg-primary (The solid color you hated) */}
        {/* ADDED: border-t (To visually separate it nicely) */}
        <div className="shrink-0 w-full border-t border-white/10 pt-3 md:pt-4 pb-[calc(92px+env(safe-area-inset-bottom))] xl:pb-10 z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                
                <div className="md:pr-4 md:border-r md:border-white/10 text-center md:text-left">
                    <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-accent mb-1">
                        <CountUp start={0} end={3} duration={8} /> +
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[1px] text-white/90 font-medium">
                        Years Exp.
                    </div>
                </div>

                <div className="md:px-4 md:border-r md:border-white/10 text-center md:text-left">
                    <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-accent mb-1">
                        <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[1px] text-white/90 font-medium">
                        Projects
                    </div>
                </div>

                <div className="md:px-4 md:border-r md:border-white/10 text-center md:text-left">
                    <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-accent mb-1">
                        <CountUp start={0} end={1} duration={5} /> +
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[1px] text-white/90 font-medium">
                        Publications
                    </div>
                </div>

                <div className="md:pl-4 text-center md:text-left">
                    <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-accent mb-1">
                        <CountUp start={0} end={23} duration={5} /> +
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[1px] text-white/90 font-medium">
                        Credentials
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
