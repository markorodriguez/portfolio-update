import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const expData = [
  {
    title: "Pokedex App",
    tools: ["React", "Bootstrap", "PokeAPI"],
    github: "https://github.com/markorodriguez/pokedex",
    deployed: "https://laughing-keller-b0f497.netlify.app/",
    image: "/images/pokedex.png",
    description: "Built with React, Bootstrap, and PokeAPI, this web app offers a clean and user-friendly interface for exploring the world of Pokemon."
  },
  {
    title: "Geo Guesser",
    tools: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/markorodriguez/guess-country",
    deployed: "https://guess-country-eight.vercel.app/",
    image: "/images/quizz.png",
    description: "Discover the world with ease through the Geography Quizz, a fun and interactive web app built with Next.js, Tailwind, and Firebase. Test your knowledge on countries and capitals."
  },
  {
    title: "Weather App",
    tools: ["Next.js", "Tailwind", "Google Images API", "OpenWeather API"],
    github: "https://github.com/markorodriguez/weather-app",
    deployed: "https://weather-app-five-self.vercel.app/",
    image: "/images/weather.png",
    description: "The Weather App is a simple and clean web app that displays the current weather conditions for any city in the world. Built with Next.js, Tailwind, and OpenWeather API."
  },
  {
    title: "Rock Paper Scissors",
    tools: ["React", "Tailwind"],
    github: "https://github.com/markorodriguez/rock-scissors-game",
    deployed: "https://nervous-euclid-2bbf74.netlify.app/",
    image: "/images/rock.png",
    description: "The Rock Paper Scissors game is a classic game that never gets old. Built with React and Tailwind, this web app offers a clean and user-friendly interface for playing the game."
  },
  {
    title: "Next Countries API",
    tools: ["Next.js", "Tailwind", "Countries API"],
    github: "https://github.com/markorodriguez/next-countries",
    deployed: "https://next-countries-5t7u14k20-markorodriguez.vercel.app/",
    image: "/images/countries.png",
    description: "The Next Countries API is a simple and clean web app that displays the countries of the world. Built with Next.js, Tailwind, and Countries API."
  },
];

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Work = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      className="md:container flex flex-col items-center justify-center py-24  text-center mx-auto w-11/12"
      id="work"
    >
      <motion.h2
        ref={ref}
        animate={controls}
        variants={variants}
        initial="hidden"
        className="text-2xl py-16 text-gray-300 underline underline-offset-8 decoration-light decoration-4"
      >
        Work
      </motion.h2>

      {/**
       * <div className="grid md:grid-cols-2 grid-cols-1 md:w-11/12 w-8/12 mx-auto gap-10 mt-14">
        {expData.map(({ title, tools, github, deployed }, index) => (
          <WorkCard title={title} github={github} deployed={deployed} key={index} tools={tools} />
        ))}
      </div>
      
       */}

      {expData.map(({ title, tools, github, deployed, image, description }, index) => (
        <div className={`flex my-8 flex-col-reverse w-full mx-auto justify-center items-center  ${index%2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse' } md:w-8/12 relative`}>
          <div className="bg-light w-6/12">
            <Image
              className="opacity-70 w-full h-full hover:cursor-pointer hover:opacity-100 transition-opacity"
              src={image}
              width={800}
              height={600}
              alt="poke_image"
            />
          </div>
          <div className="w-6/12 ">
            <div className={`h-full mx-auto w-10/12 flex flex-col ${index%2 == 0 ? 'text-right' : 'text-left' } justify-center`}>
              <h1 className="text-xl font-semibold text-light">{title}</h1>
              <div className="p-6 my-10 bg-secondary rounded-md hover:shadow-2xl">
                <p className="text-sm text-gray-300 text-justify">{description}</p>
                <div className="flex flex-row justify-center">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light text-sm font-semibold hover:underline"
                  >
                    Github
                  </a>
                  <a
                    href={deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light text-sm font-semibold hover:underline"
                  >
                    Deployed
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Work;
