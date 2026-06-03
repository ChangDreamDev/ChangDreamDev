import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="relative w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-3 py-2 md:px-10 md:py-0">
      <div className="w-full md:h-[65px] flex flex-col md:flex-row items-center justify-between m-auto gap-2 md:gap-0">
        <div className="w-full md:w-auto flex items-center justify-between">
          <Link
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={56}
              height={56}
              draggable={false}
              className="cursor-pointer hover:animate-slowspin md:w-[70px] md:h-[70px]"
            />
            <div className="font-bold ml-2 hidden sm:block text-gray-300 text-sm md:text-base">
              Chang Chen
            </div>
          </Link>

          <div className="flex flex-row gap-3 md:hidden">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-5 w-5 text-white" />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-3 py-2 md:px-[20px] md:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition px-2"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition px-2"
            >
              Source Code
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
