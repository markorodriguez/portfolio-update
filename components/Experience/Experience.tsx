import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import { FaHospital, FaNodeJs, FaSms } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
		tools: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "SQL"],
		image: <FaHospital className="mx-4" />,
		activities: [
			"Familiar with REST API development using Node.JS and Express.",
			"Hands-on experience with backend and frontend implementation.",
			"Understanding of database creation using SQL.",
		],
	},
];

const carousel = [
	{
		tool: 'Node.js',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'
	},
	{
		tool: 'Express.js',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/express-283245.png'
	},
	{
		tool: 'React.js',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png'
	},
	{
		tool: 'Next.js',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/next-js-3-1175109.png'
	},
	{
		tool: 'Tailwind CSS',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/tailwindcss-226083.png'
	},
	{
		tool: 'MongoDB',
		png_url : 'https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png'
	}
]

const variants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "spring" } },
};

const Experience = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div
			className="md:container text-center h-screen py-24 mx-auto w-11/12"
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
				className="w-auto mx-auto max-w-screen-sm px-2 py-16 sm:px-0"
			>
				<Tab.Group>
					<Tab.List className="flex p-1 space-x-1 bg-light bg-opacity-10 rounded-lg">
						{expData.map((exp, index) => (
							<Tab
								key={index}
								className={({ selected }) =>
									`${selected ? "bg-light text-white " : "text-gray-300 "
									} relative flex-1 flex justify-center items-center py-2.5 text-sm font-medium rounded-lg cursor-pointer focus:outline-none`
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

			<div className="flex flex-row md:w-7/12 justify-between md:container w-11/12 mx-auto max-w-screen-sm">
				{/* make a carousel */}
				{carousel.map((tool, index) => {
					return (
						<div key={index} className="flex flex-col items-center">
							<img
								src={tool.png_url}
								alt={tool.tool}
								className="h-16 w-16 rounded-full object-cover"
							/>
							<p className="text-gray-300 text-sm">{tool.tool}</p>
						</div>
					);
				})}
				
			</div>
		</div>
	);
};

export default Experience;
