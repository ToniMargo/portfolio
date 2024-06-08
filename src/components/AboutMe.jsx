"use client";
import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Function to update isSmallScreen state based on viewport width
    const updateIsSmallScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example breakpoint: 768px
    };
    // Call the function once when component mounts
    updateIsSmallScreen();
    // Event listener to update isSmallScreen state when viewport size changes
    window.addEventListener("resize", updateIsSmallScreen);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallScreen);
    };
  }, []);

  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 md:gap-24">
      {/* Left Column */}
      <div className="md:col-span-1 ">
        {isSmallScreen ? (
          <img src="/photo-small.jpg" alt="Photo of me" className="rounded lg:max-w-5 mb-12 md:mb-0" />
        ) : null}
        <div className="p-6">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Innovator, Problem Solver, Software Engineer</h1>
          <p className="text-gray-700 md:my-12">
            Hello! I am Antonio Martinez, a dedicated and creative software engineer with a passion for innovation and
            problem-solving. Originally from the vibrant city of Piedras Negras, Coahuila, I now call Salt Lake City,
            Utah, my home.
          </p>
          <p className="text-gray-700 my-12">
            I embarked on my journey in the tech industry in 2019, driven by a fascination for technology and a desire
            to create impactful software solutions. Over the years, I have e honed my skills in various programming
            languages, development frameworks, and project management methodologies, continuously pushing the boundaries
            of what is possible in software development.
          </p>
          <p className="text-gray-700 my-12">
            Creativity is at the core of everything I do. I thrive on designing innovative solutions that not only meet
            the needs of today but also anticipate the challenges of tomorrow. Whether I’m coding, debugging, or leading
            a project, I bring a fresh perspective and a commitment to excellence.
          </p>
          <p className="text-gray-700 lg:my-12">
            I’m always open to new opportunities and collaborations. If you’d like to discuss a project, share ideas, or
            simply connect, feel free to reach out.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1">
        <div className="p-6">
          {isSmallScreen ? null : (
            <img src="/photo.jpg" alt="Photo of me" className="rounded md:w-full lg:max-w-xl mb-12 md:mb-0" />
          )}
          <div className="lg:mt-16 flex flex-col">
            <a href="#" className="flex flex-row my-2">
              <img src="/X.svg" alt="X" className="mr-2" />
              <p>Follow me on X</p>
            </a>
            <a href="#" className="flex flex-row my-2">
              <img src="GitHub.svg" alt="GitHub" className="mr-2" />
              <p>Follow me on GitHub</p>
            </a>
            <a href="#" className="flex flex-row my-2">
              <img src="/LinkedIn.svg" alt="LinkedIn" className="mr-2" />
              <p>Follow me on LinkedIn</p>
            </a>

            <a href="#" className="flex flex-row my-16">
              <img src="/envelope.svg" alt="envelope" className="mr-2" />
              <p>tonihmartinez@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
