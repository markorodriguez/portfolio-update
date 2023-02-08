import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const backendTools = [
    {
        tool: "Node.JS",
        svg_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    },
    {
        tool: "Express.JS",
        svg_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png",
    },
    {
        tool: "MongoDB",
        svg_url: "https://www.svgviewer.dev/static-svgs/34566/mongodb.svg",
    },
    {
        tool: "MySQL",
        svg_url: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    },
    {
        tool: "PostgreSQL",
        svg_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    {
        tool: "TypeScript",
        svg_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
        tool: "AWS",
        svg_url: "https://feedzai.com/aptopees/2022/11/AWS.svg",
    },
    {
        tool: "Python",
        svg_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    }
];

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Backend = () => {
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
            <h2 className="text-xl mb-12 text-gray-300 underline underline-offset-8 decoration-light decoration-4">
                Backend
            </h2>
            <div className="grid grid-flow-col grid-cols-2  md:grid-cols-4 md:grid-rows-2 grid-rows-4">
                {backendTools.map((tool, index) => (
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

export default Backend