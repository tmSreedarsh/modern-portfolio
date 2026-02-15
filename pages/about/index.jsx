import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// IMPORT ICONS
import { 
  FaPython, 
  FaGitAlt, 
  FaGlobeAmericas
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
  const touchStart = useRef({ x: 0, y: 0, ignoreSwipe: false });
  const contentScrollRef = useRef(null);
  const mobileTabsScrollRef = useRef(null);
  const mobileTabRefs = useRef([]);
  const maxSectionIndex = aboutData.length - 1;

  const scrollActiveMobileTabIntoView = (targetIndex, behavior = "smooth") => {
    const tabsScroller = mobileTabsScrollRef.current;
    const activeTab = mobileTabRefs.current[targetIndex];

    if (!tabsScroller || !activeTab) return;
    if (tabsScroller.scrollWidth <= tabsScroller.clientWidth) return;

    const targetLeft =
      activeTab.offsetLeft + activeTab.offsetWidth / 2 - tabsScroller.clientWidth / 2;
    const maxScrollLeft = tabsScroller.scrollWidth - tabsScroller.clientWidth;
    const nextScrollLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    tabsScroller.scrollTo({
      left: nextScrollLeft,
      behavior,
    });
  };

  const setSectionByIndex = (nextIndex) => {
    setIndex((prev) => {
      const resolvedIndex =
        typeof nextIndex === "function" ? nextIndex(prev) : nextIndex;
      return Math.max(0, Math.min(resolvedIndex, maxSectionIndex));
    });
  };

  const goNextSection = () => {
    setSectionByIndex((prev) => prev + 1);
  };

  const goPrevSection = () => {
    setSectionByIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const ignoreSwipe =
      e.target instanceof Element &&
      Boolean(e.target.closest('[data-swipe-ignore="true"]'));

    touchStart.current = { x: touch.clientX, y: touch.clientY, ignoreSwipe };
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current.ignoreSwipe) {
      touchStart.current.ignoreSwipe = false;
      return;
    }

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    // Switch sections only for deliberate horizontal swipes on content.
    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
      return;
    }

    if (deltaX < 0) {
      goNextSection();
    } else {
      goPrevSection();
    }
  };

  useEffect(() => {
    // Keep every section consistent: start at top when switching tabs.
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTo({ top: 0, behavior: "auto" });
    }

    const rafId = window.requestAnimationFrame(() => {
      scrollActiveMobileTabIntoView(index, "smooth");
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [index]);

  return (
    // MASTER LAYOUT: 
    // h-full: Fills the layout viewport while keeping internal section scrolling.
    // flex flex-col: Stacks elements vertically.
    <div className="h-full h-[100dvh] bg-primary/30 text-center xl:text-left relative z-10 flex flex-col overflow-hidden overflow-x-hidden">
      
      {/* Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Circles />
      </div>

      <div className="container mx-auto max-w-full h-full flex flex-col px-4 sm:px-6 md:px-8 xl:px-4 relative z-20">
        
        {/* 1. HEADER SPACER */}
        {/* Pushes everything down so it doesn't hide behind your name */}
        <div className="shrink-0 h-[clamp(122px,19vh,148px)] sm:h-[clamp(130px,18vh,156px)] lg:h-[108px] xl:h-[136px]"></div>

        {/* 2. MAIN CONTENT (Expands to fill space) */}
        {/* min-h-0 is CRITICAL: It allows the inner content to scroll while the parent stays fixed. */}
        <div className="flex-1 flex flex-col min-h-0 w-full xl:max-w-[980px] xl:mx-auto">
            
            {/* TABS ROW */}
            <div data-swipe-ignore="true" className="shrink-0 mb-3 xl:mb-6">
                <div className="md:hidden relative overflow-hidden">
                    <div
                      ref={mobileTabsScrollRef}
                      className="flex w-full max-w-full flex-nowrap overflow-x-auto overscroll-x-contain no-scrollbar touch-pan-x gap-4 border-b border-white/10 pb-2 px-1"
                    >
                      {aboutData.map((item, itemI) => (
                        <button
                          type="button"
                          key={itemI}
                          ref={(el) => {
                            mobileTabRefs.current[itemI] = el;
                          }}
                          className={`${
                            index === itemI &&
                            "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                          } cursor-pointer text-xs relative after:w-5 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 whitespace-nowrap flex-none transition-all duration-300 py-1 hover:text-white font-medium`}
                          onClick={() => setSectionByIndex(itemI)}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                </div>

                <div className="hidden md:flex md:flex-wrap xl:flex-nowrap overflow-x-auto md:overflow-visible no-scrollbar justify-start gap-2 sm:gap-3 md:gap-x-4 md:gap-y-2 xl:gap-x-6 border-b border-white/10 pb-2 pr-6 md:pr-0 items-center">
                    {aboutData.map((item, itemI) => (
                      <button
                        type="button"
                        key={itemI}
                        className={`${
                          index === itemI &&
                          "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                        } cursor-pointer text-sm xl:text-base relative after:w-6 sm:after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 whitespace-nowrap flex-shrink-0 transition-all duration-300 py-1 px-1 hover:text-white font-medium`}
                        onClick={() => setSectionByIndex(itemI)}
                      >
                        {item.title}
                      </button>
                    ))}
                </div>

                <div
                  className="md:hidden mt-2 flex items-center justify-center"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        {aboutData.map((item, itemI) => (
                          <button
                            type="button"
                            key={`${item.title}-dot`}
                            className="relative h-2 w-2"
                            onClick={() => setSectionByIndex(itemI)}
                            aria-label={`Go to ${item.title}`}
                          >
                            {index === itemI ? (
                              <motion.span
                                layoutId="about-active-dot"
                                className="absolute inset-0 rounded-full bg-accent shadow-[0_0_8px_rgba(241,48,36,0.8)]"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            ) : (
                              <span className="absolute inset-0 rounded-full bg-white/35" />
                            )}
                          </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* SCROLLABLE LIST AREA */}
            {/* This div handles the scrolling. The counters below are OUTSIDE this div. */}
            <div
                ref={contentScrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar px-1 sm:px-2 md:px-3 pb-2 sm:pb-4 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex w-full flex-col gap-y-4 items-center xl:items-start"
                >
                    {/* TABLE LOGIC */}
                    {aboutData[index].title === 'Education' ? (
                        <div className="w-full flex flex-col gap-3">
                            <div className="md:hidden w-full space-y-2">
                                {aboutData[index].info.map((row, i) => (
                                    <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-left shadow-lg">
                                        <div className="grid grid-cols-[76px_1fr] gap-x-2 gap-y-1.5 text-[11px] sm:text-xs">
                                            <span className="uppercase tracking-wide text-white/50">Degree</span>
                                            <span className="font-bold text-accent leading-tight">{row.degree}</span>

                                            <span className="uppercase tracking-wide text-white/50">University</span>
                                            <span className="text-white/80 leading-tight">{row.university}</span>

                                            <span className="uppercase tracking-wide text-white/50">Stream</span>
                                            <span className="whitespace-pre-line leading-snug text-white/80">{row.specialization}</span>

                                            <span className="uppercase tracking-wide text-white/50">Year</span>
                                            <span className="font-bold text-accent leading-tight">{row.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div data-swipe-ignore="true" className="hidden md:block w-full overflow-x-auto rounded-lg border border-white/10 bg-white/5 relative shadow-lg">
                                <table className="w-full text-left text-white/80 border-collapse min-w-[680px]">
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
                        </div>
                    ) : (
                        // LIST LOGIC
                        aboutData[index].info.map((item, itemI) => (
                            <div
                                key={itemI}
                                className="w-full min-w-0 flex flex-col lg:flex-row lg:items-start gap-y-2 lg:gap-x-6 text-center lg:text-left text-white/70"
                            >
                                <div className="font-light mb-1 lg:mb-0 text-white lg:min-w-[180px] font-bold text-[13px] sm:text-[14px] md:text-[15px]">
                                    {item.title}
                                </div>
                                
                                <div className="flex flex-col items-stretch lg:items-start w-full min-w-0">
                                    <div className="flex flex-col lg:flex-row gap-x-2 items-center mb-1">
                                        <div className="hidden lg:flex text-white/40">-</div>
                                        <div className="lg:hidden mb-1 text-accent font-semibold text-xs w-full break-words">{item.stage}</div>

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
                                        <ul className="w-full max-w-full px-2 sm:px-0 text-[11px] sm:text-xs md:text-sm text-white/60 italic list-none lg:list-disc lg:pl-5 space-y-2 mt-1 leading-relaxed text-center lg:text-left break-words">
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
        <div className="shrink-0 w-full border-t border-white/10 pt-2 md:pt-3 pb-[calc(140px+env(safe-area-inset-bottom))] sm:pb-[calc(134px+env(safe-area-inset-bottom))] md:pb-[calc(118px+env(safe-area-inset-bottom))] lg:pb-[calc(114px+env(safe-area-inset-bottom))] xl:pb-10 z-50">
            <div className="w-full max-w-[980px] mx-auto grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 items-start">
                
                <div className="pr-1 sm:pr-2 md:pr-4 border-r border-white/10 text-center min-h-[52px] sm:min-h-[58px] md:min-h-0 flex flex-col items-center justify-start">
                    <div className="text-base sm:text-lg md:text-3xl font-extrabold text-accent mb-1 leading-none">
                        <CountUp start={0} end={3} duration={8} /> +
                    </div>
                    <div className="text-[7px] sm:text-[8px] md:text-xs uppercase tracking-[0.5px] md:tracking-[1px] text-white/90 font-medium leading-tight">
                        <span className="md:hidden">Experience</span>
                        <span className="hidden md:inline">Years Experience</span>
                    </div>
                </div>

                <div className="px-1 sm:px-2 md:px-4 border-r border-white/10 text-center min-h-[52px] sm:min-h-[58px] md:min-h-0 flex flex-col items-center justify-start">
                    <div className="text-base sm:text-lg md:text-3xl font-extrabold text-accent mb-1 leading-none">
                        <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="text-[7px] sm:text-[8px] md:text-xs uppercase tracking-[0.5px] md:tracking-[1px] text-white/90 font-medium leading-tight">
                        Projects
                    </div>
                </div>

                <div className="px-1 sm:px-2 md:px-4 border-r border-white/10 text-center min-h-[52px] sm:min-h-[58px] md:min-h-0 flex flex-col items-center justify-start">
                    <div className="text-base sm:text-lg md:text-3xl font-extrabold text-accent mb-1 leading-none">
                        <CountUp start={0} end={1} duration={5} /> +
                    </div>
                    <div className="text-[7px] sm:text-[8px] md:text-xs uppercase tracking-[0.5px] md:tracking-[1px] text-white/90 font-medium leading-tight">
                        Publications
                    </div>
                </div>

                <div className="pl-1 sm:pl-2 md:pl-4 text-center min-h-[52px] sm:min-h-[58px] md:min-h-0 flex flex-col items-center justify-start">
                    <div className="text-base sm:text-lg md:text-3xl font-extrabold text-accent mb-1 leading-none">
                        <CountUp start={0} end={23} duration={5} /> +
                    </div>
                    <div className="text-[7px] sm:text-[8px] md:text-xs uppercase tracking-[0.5px] md:tracking-[1px] text-white/90 font-medium leading-tight">
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
