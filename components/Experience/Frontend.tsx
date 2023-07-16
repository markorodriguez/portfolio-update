import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const frontendTools = [
    {
        tool: "React.JS",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
        tool: "Next.JS",
        svg_url:
            "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    },
    {
        tool: "Tailwind CSS",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
        tool: "CSS",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png",
    },
    {
        tool: "SASS",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    },
    {
        tool: "Bootstrap",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
    },
    {
        tool: "JavaScript",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
        tool: "TypeScript",
        svg_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
];

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Frontend = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref}
            animate={controls}
            variants={variants}
            initial="hidden" className="md:w-6/12 mx-auto w-full mb-10">
            <h2 className="text-xl text-gray-300 mb-12 underline underline-offset-8 decoration-light decoration-4">
                Frontend
            </h2>
            <div className="grid grid-flow-col grid-cols-2  md:grid-cols-4 md:grid-rows-2 grid-rows-4">
                {frontendTools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center mx-4 my-4"
                    >
                        <img
                            src={tool.svg_url}
                            alt={tool.tool}
                            className="w-auto h-16"
                        />
                        <p className="text-gray-300 my-2 text-sm">{tool.tool}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Frontend