// pages/work/index.js
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Link from 'next/link';
// Icons
import { BsFileEarmarkPdf, BsArrowRight, BsBook, BsPen } from 'react-icons/bs';

const Work = () => {
  return (
    // ROOT CONTAINER
    // 1. h-full: Takes full height.
    // 2. pt-[160px]: (MOBILE FIX) Forces content to start 160px down. It CANNOT go higher.
    // 3. xl:pt-36: (DESKTOP) Standard padding.
    // 4. xl:justify-center: Centers content ONLY on Desktop. Mobile uses top padding.
    <div className='h-full bg-primary/30 flex flex-col items-center pt-[149px] xl:pt-36 pb-20 xl:pb-0 xl:justify-center'>
      <Circles />
      
      {/* SCROLL CONTAINER
         - h-full: Fills the remaining space.
         - overflow-y-auto: Enables scrolling inside this area.
         - no-scrollbar: Hides the bar for a clean look.
      */}
      <div className='container mx-auto z-10 h-full overflow-y-auto xl:overflow-visible no-scrollbar'>
        
        <div className='flex flex-col xl:flex-row gap-x-8 items-start xl:items-center'>
          
          {/* TEXT SECTION (Left Side) */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-8 xl:mb-0 justify-center z-10 w-full'>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className='h2 text-[28px] md:text-[32px] xl:mt-0'
            >
              My Projects <span className='text-accent'>.</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm'
            >
              Focused on Remote Sensing and Geoinformatics. Detailed project pages are currently 
              <span className="text-accent"> uploading soon...</span>
              <br />
              Until then, view my research summary:
            </motion.p>

            {/* DOWNLOAD BUTTON */}
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="mb-6"
            >
               <Link 
                 href="/research-summary.pdf" 
                 target="_blank" 
                 className="flex items-center gap-x-2 text-white hover:text-accent transition-all group cursor-pointer justify-center lg:justify-start"
               >
                 <span className="text-xl text-accent animate-bounce">
                   <BsFileEarmarkPdf/>
                 </span>
                 <span className="border-b border-white/40 group-hover:border-accent text-xs tracking-widest uppercase font-bold">
                   Download Research Summary
                 </span>
               </Link>
            </motion.div>

            {/* PUBLISHED BOOK CHAPTER */}
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="mb-3 w-full max-w-[400px] mx-auto lg:mx-0"
            >
              <div className="bg-white/5 rounded-lg p-3 text-left border border-white/10 hover:border-accent/50 transition-all group">
                <div className="flex items-start gap-x-3">
                  <div className="text-xl text-accent mt-1"><BsBook /></div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Published Book Chapter</div>
                    <h3 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-accent transition-colors">
                      Prioritization of Flood Susceptibility Zones (MCDM)
                    </h3>
                    <p className="text-[10px] text-white/70 italic mb-1">
                      Publisher: Taylor & Francis (CRC Press)
                    </p>
                    <Link 
                      href="https://doi.org/10.1201/9781003533511-16" 
                      target="_blank" 
                      className="text-[10px] text-white/90 hover:text-white flex items-center gap-x-1 font-semibold"
                    >
                       Visit Official Chapter Page <BsArrowRight className="text-accent"/>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MANUSCRIPTS */}
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className="mb-6 w-full max-w-[400px] mx-auto lg:mx-0"
            >
               <div className="text-[9px] font-bold text-accent tracking-widest uppercase mb-2 text-left">
                  Manuscripts in Preparation
               </div>

               <div className="bg-white/5 rounded-lg p-3 text-left border border-white/10 border-dashed hover:border-accent/50 transition-all group">
                <div className="flex items-start gap-x-3">
                  <div className="text-xl text-white/40 mt-1"><BsPen /></div>
                  <div>
                    <h3 className="text-sm font-bold text-white/90 mb-1 leading-snug">
                      Coastal Vulnerability Assessment of Kasaragod and Kannur
                    </h3>
                    <p className="text-[10px] text-white/60 italic">
                      Authors: T.M. Sreedarsh & Poojith Kumar D P
                    </p>
                    <div className="mt-1 inline-block bg-white/10 px-2 py-0.5 rounded text-[9px] text-white/80">
                      Book Chapter (Upcoming)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* SLIDER SECTION (Right Side) */}
          <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='w-full max-w-[360px] md:max-w-md xl:max-w-[65%] mx-auto xl:mx-0 mb-20 xl:mb-0'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
