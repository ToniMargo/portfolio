"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="md:w-3/4 px-6 flex flex-col">
      <Image src="/avatar.jpg" alt="Avatar" className="rounded-full my-6" width={64} height={64} />
      <h1 className="text-3xl md:text-6xl font-bold mb-4">Building the Future of Technology</h1>
      <p className="text-lg text-zinc-600 mt-6 mb-8">
        Welcome to my portfolio! I’m Antonio Martinez, a passionate software engineer dedicated to creating innovative
        and efficient solutions. With a knack for solving complex problems and a love for clean, scalable code, I bring
        ideas to life through technology. Explore my projects, skills, and the impact of my work. Let’s build something
        extraordinary together!
      </p>
      <div className="flex flex-row items-center p-0 gap-3 w-24 h-6">
        <a href="#">
          <img src="/LinkedIn.svg" alt="LinkedIn" className="w-24px" />
        </a>
        <a href="#">
          <img src="/X.svg" alt="X" className="w-24px" />
        </a>
        <a href="#">
          <img src="GitHub.svg" alt="GitHub" className="w-24px" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
