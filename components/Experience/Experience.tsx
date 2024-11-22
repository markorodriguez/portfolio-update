import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { FaHospital, FaNodeJs, FaSms } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Frontend from "./Frontend";
import Backend from "./Backend";

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Cloud from "./Cloud";

const expData = [
	{
		company: "Laureate Peru",
		place: "Lima, Peru",
		position: "Backend Developer",
		period: "July 2024 - now",
		image: <FaHospital className="mx-4" />,
		activities: [
			"Implementing caché strategies in AWS Lambda based on FastAPI and DynamoDB.",
			"Cloudwatch monitoring and logging for AWS services.",
			"Adding dependencies inyection in FastAPI for better code organization.",
		],
	},
	{
		company: "Mowa Consultora",
		place: "Lima, Peru",
		position: "Backend Developer",
		period: "September 2022 - June 2024",
		image: <FaSms className="mx-4" />,
		activities: [
			"Implementation of APIs in Serverless for AWS Lambda (NodeJS).",
			"Creation and management of AWS services (EC2, Api Gateway, Lambda, S3, Cloudwatch, Route 53, Amplify, DynamoDB, and CloudWatch).",
			"Management of relational databases (PostgreSQL) and non-relational databases (DynamoDB and MongoDB).",
			"Execution and development of unit tests using Jest.",
			"Development of interfaces with React.JS, Next.JS, Tailwind, FramerMotion, and Redux (Typescript).",
			"Consumption of services from AWS, AZURE, IBM, and GCP using Python for Speech To Text processing.",
			"Documentation of APIs under OpenAPI 3.0 (Swagger).",
			"Development of requirements for applications in Java and Spring.",
			"Maintenance of legacy applications in Struts 2 (Java).",
			"Monitoring of EC2 instances and Azure VMs.",
			"Automation of tasks using Python."
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
	const [isMedium, setIsMedium] = useState(false);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	window.addEventListener("resize", () => {
		if (window.innerWidth < 768) {
			console.log("is medium");
			setIsMedium(true);
		}
		if (window.innerWidth > 768) {
			console.log("is not medium");
			setIsMedium(false);
		}
	})


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
				className=" mx-auto px-2 py-16 sm:px-0"
			>
				{
					/**
					 * 
					 * <Tab.Group>
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
					 * 
					 */
				}
				<Timeline

					sx={{
						[`& .${timelineItemClasses.positionRight}:before`]: {
							flex: 0,
							padding: 0
						}
					}}



					position={isMedium ? "right" : "alternate"} className="md:w-10/12 w-full  mx-auto">
					{expData.map((exp, index) => (
						<TimelineItem key={index}>
							<TimelineSeparator>
								<TimelineDot color="grey" variant="filled">
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<div className="rounded-lg h-auto bg-slate-700 shadow-lg p-4">
									<div className="flex flex-col px-4 text-left">
										<p className="text-sm text-light">{exp.period}</p>
										<h2 className="text-lg text-gray-300">{exp.position} - <span className="font-bold">{exp.company}</span></h2>
										<div className="my-4">
											{exp.activities.map((activity, index) => {
												return (
													<p key={index} className="text-sm my-2">
														<span className="text-light">▹</span> <span className="text-gray-300 text-sm">{activity}</span>
													</p>
												);
											}
											)}
										</div>
									</div>
								</div>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>

			</motion.div>

			<div className="flex flex-col md:w-full justify-around md:container w-11/12 mx-auto max-w-screen-sm">
				<Frontend />
				<Backend />
				<Cloud />
			</div>
		</div>
	);
};

export default Experience;
