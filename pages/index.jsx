import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="home-hero bg-primary/60 w-full min-h-screen lg:h-screen relative overflow-hidden">
      {/* text */}
      <div className="home-hero__copy w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="home-hero__content text-center flex flex-col justify-center xl:text-left h-full w-full px-4 md:px-8 pt-40 pb-20 lg:pb-0">
          
          {/* TITLE */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="home-hero__title h1 mb-4 font-bold"
          >
            <span className="block whitespace-nowrap text-[14px] sm:text-lg md:text-xl lg:text-3xl">
              Geospatial Intelligence{" "}
              <span className="text-accent">& Earth Observation</span>
            </span>

            <span className="block whitespace-nowrap text-[14px] sm:text-lg md:text-xl lg:text-3xl mt-1 md:mt-2">
              Geoinformatics & Remote Sensing Researcher
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xs md:max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 lg:mb-16 text-xs opacity-80"
          >
            I am a geospatial postgraduate with four years of practical experience in GIS and remote sensing. I
            completed a six-month internship at ISRO's National Remote Sensing Centre (NRSC) and have worked on
            academic projects. I currently work as a Geospatial Analyst at SatSure. I use AI-assisted coding to
            prototype tools and automate repetitive tasks, leaving me more time to explore data and grow as a <span className="font-semibold text-accent">versatile researcher</span>.
          </motion.p>

          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-xs md:max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-3 text-xs md:text-sm text-white/75"
          >
            I am open to roles as an Image Analyst, Geospatial Analyst, or Geomatics Engineer, as well as research
            opportunities.
          </motion.p>

          <div className="max-w-xs md:max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-5">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2">
              Research Focus
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-left text-[11px] md:text-sm text-white/80">
              <li><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />Crop classification</li>
              <li><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />Forest fire mapping</li>
              <li><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />Landslide and flood risk</li>
              <li><span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />Coastal vulnerability</li>
            </ul>
          </div>

          {/* btn */}
          <div className="flex justify-center lg:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden lg:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/* avatar and background (Desktop) */}
      <div className="absolute right-0 bottom-0 w-[1280px] h-full pointer-events-none hidden lg:block">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="home-hero__portrait w-[737px] h-[678px] absolute bottom-0 right-[8%] pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* responsive avatar */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="lg:hidden absolute w-[180px] md:w-[400px] h-auto bottom-0 md:bottom-0 right-0 md:right-2 pointer-events-none opacity-60"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
