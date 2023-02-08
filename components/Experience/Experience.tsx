import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import { FaHospital, FaNodeJs, FaSms } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Frontend from "./Frontend";
import Backend from "./Backend";

const expData = [
	{
		company: "Mowa Consultora",
		place: "Lima, Peru",
		position: "Backend Developer Jr",
		period: "September 2022 - Now",
		image: <FaSms className="mx-4" />,
		activities: [
			"Development utilizing API Gateway and AWS Lambda (Node.js)",
			"Script and query development for DynamoDB",
			"Unit testing execution using Jest",
			"Frontend development using React.JS",
			"Consumption of services from AWS, AZURE, IBM, and GCP using Python",
			"API documentation using OpenAPI 3.0 (Swagger)",
		],
	},
	{
		company: "Clinica San Andrés",
		place: "Lima, Peru",
		position: "Intern Developer",
		period: "March 2022 - June 2022",
		image: <FaHospital className="mx-4" />,
		activities: [
			"Familiar with REST API development using Node.JS and Express.",
			"Hands-on experience with backend and frontend implementation.",
			"Understanding of database creation using SQL.",
		],
	}
];


const variants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Experience = () => {
	// Experience
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	


	return (
		<div
			className="md:container  min-h-screen text-center py-24 mx-auto w-11/12"
			id="experience"
		>
			<motion.h2
				ref={ref}
				animate={controls}
				variants={variants}
				initial="hidden"
				className="text-2xl text-gray-300 underline underline-offset-8 decoration-light decoration-4"
			>
				Experience
			</motion.h2>

			<motion.div
				ref={ref}
				animate={controls}
				variants={variants}
				initial="hidden"
				className=" mx-auto max-w-xl px-2 py-16 sm:px-0"
			>
				<Tab.Group>
					<Tab.List className="flex mx-auto justify-center overflow-x-scroll md:overflow-x-visible rounded-lg">
						{expData.map((exp, index) => (
							<Tab
								key={index}
								className={({ selected }) =>
									`${selected ? "border-t-2  border-light bg-light bg-opacity-10 text-white " : "text-gray-300 "
									} relative px-4 shrink-0 flex justify-center bg-light bg-opacity-10 items-center py-4 text-sm font-medium  cursor-pointer focus:outline-none`
								}
							>
								{exp.image} {exp.company}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-10 ">
						{expData.map((exp, index) => (
							<Tab.Panel key={index} className="px-4 py-2 text-gray-300">
								<div className="bg-secondary rounded-lg h-auto shadow-lg p-4">
									<div className="flex flex-col px-4 text-left">
										<h2 className="text-lg">{exp.position}</h2>
										<p className="text-sm text-gray-400">{exp.period}</p>
										<div className="my-4">
											{exp.activities.map((activity, index) => {
												return (
													<p key={index} className="text-sm my-2">
														<span className="text-light">▹</span> {activity}
													</p>
												);
											})}
										</div>
									</div>
								</div>
							</Tab.Panel>
						))}
					</Tab.Panels>
				</Tab.Group>
			</motion.div>

			<div className="flex flex-col md:w-full justify-around md:container w-11/12 mx-auto max-w-screen-sm">
				<Frontend />
				<Backend/>
			</div>
		</div>
	);
};

export default Experience;
