import { useEffect, useRef, useState } from "react";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
} from "react-icons/ri";

import { SiOrcid, SiGooglescholar } from "react-icons/si";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sreedarsh-t-m-6a739b252/",
    Icon: RiLinkedinLine,
    color: "hover:text-[#0077b5]",
    activeColor: "text-[#0077b5]",
  },
  {
    name: "Github",
    link: "https://github.com/tmSreedarsh",
    Icon: RiGithubLine,
    color: "hover:text-[#f0f6fc]",
    activeColor: "text-[#f0f6fc]",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0009-0266-5122",
    Icon: SiOrcid,
    color: "hover:text-[#A6CE39]",
    activeColor: "text-[#A6CE39]",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=5QaL5pkAAAAJ",
    Icon: SiGooglescholar,
    color: "hover:text-[#4285F4]",
    activeColor: "text-[#4285F4]",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/tmSreedarsh",
    Icon: RiTwitterLine,
    color: "hover:text-[#1DA1F2]",
    activeColor: "text-[#1DA1F2]",
  },
  {
    name: "Email",
    link: "mailto:tmsreedarsh@gmail.com",
    Icon: RiMailLine,
    color: "hover:text-[#EA4335]",
    activeColor: "text-[#EA4335]",
  },
];

const Socials = () => {
  const [activeSocial, setActiveSocial] = useState("");
  const blinkTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
    };
  }, []);

  const triggerBlink = (socialName) => {
    setActiveSocial(socialName);

    if (blinkTimeoutRef.current) {
      clearTimeout(blinkTimeoutRef.current);
    }

    blinkTimeoutRef.current = setTimeout(() => {
      setActiveSocial("");
    }, 600);
  };

  return (
    <div className="flex items-center gap-x-3 md:gap-x-5 text-base md:text-lg -mt-4 xl:-mt-10">
      {socialData.map((social, i) => (
        <a
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          onMouseDown={() => triggerBlink(social.name)}
          onTouchStart={() => triggerBlink(social.name)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              triggerBlink(social.name);
            }
          }}
          style={{ animationDelay: `${i * 0.16}s` }}
          className={`${social.activeColor} ${social.color} ${
            activeSocial === social.name ? "click-blink" : "pre-click-blink"
          } transition-all duration-300 hover:scale-110`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
      <style jsx>{`
        @keyframes social-click-blink {
          0% {
            transform: scale(1);
          }

          35% {
            transform: scale(1.28);
          }

          70% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px currentColor);
          }

          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 transparent);
          }
        }

        .click-blink {
          animation: social-click-blink 0.55s ease-out 1;
        }

        @keyframes social-pre-click-blink {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 transparent);
          }

          50% {
            transform: scale(1.08);
            filter: drop-shadow(0 0 6px currentColor);
          }
        }

        .pre-click-blink {
          animation: social-pre-click-blink 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Socials;
