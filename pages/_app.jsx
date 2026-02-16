import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

// 1. Visitor Tracker (Analytics)
import { Analytics } from "@vercel/analytics/react";

// 2. Speed Tracker (Speed Insights) - NEW
import { SpeedInsights } from "@vercel/speed-insights/next";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      
      {/* Tracker Tools: Both running together */}
      <Analytics />
      <SpeedInsights />
      
    </Layout>
  );
}

export default MyApp;