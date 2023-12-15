import React from "react";
import musicLib from "../assets/portfolio/Music_Library.png";
import forum from "../assets/portfolio/Forum-web.jpg";
import mnp from "../assets/portfolio/mnp.jpg"; 
import cycle from "../assets/portfolio/cycle-toocss.jpg"; 
import staytuned from "../assets/portfolio/staytuned.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: musicLib,
      href: 'https://github.com/Ameena-Juhi/Music-Library.git',
    },
    {
      id: 2,
      src: forum,
      href: 'https://github.com/Ameena-Juhi/LoginForum.git',
    },
    {
      id: 3,
      src: mnp,
      href: 'https://github.com/Ameena-Juhi/Number-Portability.git',
    },
    {
      id: 4,
      src: cycle,
      href: 'https://github.com/Ameena-Juhi/Cycles_RestAPI.git',
    },
    {
      id: 5,
      src: staytuned,
    },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="not found"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a href={href} className="w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105 ml-8">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Portfolio;
