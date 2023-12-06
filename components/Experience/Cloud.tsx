import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const backendTools = [
    {
        tool: "AWS",
        svg_url: "https://www.sophos.com/sites/default/files/2022-02/aws-logo-white-orange.png",
    },
    {
        tool: "Azure",
        svg_url: "https://swimburger.net/media/ppnn3pcl/azure.png",
    }
];

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Cloud = () => {
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
            initial="hidden" className="md:w-6/12 mx-auto w-full">
            <h2 className="text-xl mb-12 text-gray-300 underline underline-offset-8 decoration-light decoration-4">
                Cloud
            </h2>
            <div className="grid grid-flow-col grid-cols-2  md:grid-cols-4 md:grid-rows-1 grid-rows-1">
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

export default Cloud