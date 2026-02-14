import Image from "next/image";
// Removed Link import since we don't need it anymore
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "NRSC-ISRO Project", 
          path: "/thumb1.jpg", 
          tag: "M.Tech Major Project"
        },
        {
          title: "Landslide Vulnerability", 
          path: "/thumb2.jpg",
          tag: "M.Tech Mini Project"
        },
        {
          title: "Coastal Vulnerability", 
          path: "/thumb3.jpg",
          tag: "M.Sc. Project"
        },
        {
          title: "Geospatial Research", 
          path: "/thumb4.jpg",
          tag: "Python & GEE"
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={12}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full h-[280px] min-[380px]:h-[320px] sm:h-[380px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-full pb-10">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-xl overflow-hidden flex items-center justify-center group bg-white/5 border border-white/10 shadow-lg shadow-black/40 min-h-0"
                key={imageI}
              >
                {/* CHANGED: Replaced <Link> with a <div> 
                   Removed 'cursor-pointer' so users know it's not clickable yet.
                */}
                <div className="relative w-full h-full block">
                  
                  {/* IMAGE */}
                  <Image 
                    src={image.path} 
                    alt={image.title} 
                    width={500} 
                    height={300} 
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-60 sm:group-hover:opacity-90 transition-all duration-500"
                  />

                  {/* TEXT CONTENT */}
                  <div className="absolute bottom-0 w-full p-2 sm:p-3 flex flex-col justify-end h-full pointer-events-none">
                    <div className="translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                      
                      {/* Tag */}
                      <div className="text-[8px] sm:text-[9px] text-accent tracking-widest uppercase mb-1 font-semibold leading-tight">
                        {image.tag}
                      </div>

                      {/* Title */}
                      <div className="text-[9px] min-[380px]:text-[10px] sm:text-[12px] font-bold text-white uppercase tracking-wide leading-tight mb-1 drop-shadow-md">
                        {image.title}
                      </div>

                      {/* Removed "VIEW PROJECT" arrow since there is no link */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
