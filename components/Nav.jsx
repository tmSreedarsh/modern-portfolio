// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-24 xl:max-w-md xl:h-screen">
      {/* INNER CONTAINER 
         - Mobile: h-[80px], justify-evenly (spreads items nicely)
         - Desktop: Wider sidebar (xl:w-24) to fit text
      */}
      <div className="flex w-full xl:flex-col items-center justify-evenly xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-4 bg-white/10 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex flex-col items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={i}
            >
              {/* ICON */}
              <div className="mb-1">
                <link.Icon aria-hidden="true" />
              </div>

              {/* TEXT LABEL (Below Icon) */}
              <div className="text-[10px] font-medium capitalize leading-none tracking-wide">
                {link.name}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

