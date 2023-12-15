import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Welcome to my world of software development and design! I specialize in creating and designing software, with a current focus on crafting engaging web applications. My expertise lies in leveraging technologies such as Java, AngularJs, Spring Boot, Microservices, and MySQL. I am enthusiastic about pushing the boundaries of innovation in the digital realm and am dedicated to delivering high-quality, efficient solutions. Join me on this journey as I explore the ever-evolving landscape of software development, bringing ideas to life with a passion for cutting-edge technologies.
        </p>

        <br />

        <p className="text-xl">
          Join me on this journey as I explore the ever-evolving landscape of software development, bringing ideas to life with a passion for cutting-edge technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
