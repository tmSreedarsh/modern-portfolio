import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa"; // Importing a tool icon
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Testimonials <span className="text-accent">.</span>
        </motion.h2>

        {/* Maintenance Message Area */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center justify-center gap-y-6 mt-8 xl:mt-16"
        >
          {/* Animated Icon */}
          <div className="text-6xl text-accent animate-pulse">
            <FaTools />
          </div>

          {/* Text Message */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Under Maintenance
            </h3>
            <p className="text-white/60 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              I am currently gathering feedback from my professors and research colleagues. 
              <br />
              This section will be updated soon with real insights!
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;