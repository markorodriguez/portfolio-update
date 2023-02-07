import React, {useEffect} from "react";
import WorkCard from "./WorkCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const expData = [
  {
    title: "Pokedex App",
    tools: ["React", "Express", "Bootstrap", "PokeAPI"],
    github: "https://github.com/markorodriguez/pokedex",
    deployed: "https://laughing-keller-b0f497.netlify.app/",
  },
  {
    title: "Geo Guesser",
    tools: ["Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/markorodriguez/guess-country",
    deployed: "https://guess-country-eight.vercel.app/",
  },
  {
    title: "Weather App",
    tools: ["Next.js", "Tailwind", "Google Images API", "OpenWeather API"],
    github: "https://github.com/markorodriguez/weather-app",
    deployed: "https://weather-app-five-self.vercel.app/",
  },
  {
    title: "Rock Paper Scissors",
    tools: ["React", "Tailwind"],
    github: "https://github.com/markorodriguez/rock-scissors-game",
    deployed: "https://nervous-euclid-2bbf74.netlify.app/",
  },
  {
    title: "Next Countries API",
    tools: ["Next.js", "Tailwind", "Countries API"],
    github: "https://github.com/markorodriguez/next-countries",
    deployed: "https://next-countries-5t7u14k20-markorodriguez.vercel.app/",
  }
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
      className="md:container text-center min-h-screen py-24 mx-auto w-11/12"
      id="work"
    >
      <motion.h2 ref={ref}
				animate={controls}
				variants={variants}
				initial="hidden" 
        className="text-2xl text-gray-300 underline underline-offset-8 decoration-light decoration-4">
        Work
      </motion.h2>

      <div className="grid md:grid-cols-3 md:container w-11/12 mx-auto gap-10 mt-14">
        {expData.map(({title, tools, github, deployed}, index) => (
          <WorkCard title={title} github={github} deployed={deployed} key={index} tools={tools} />
        ))}
      </div>
    </div>
  );
};

export default Work;
