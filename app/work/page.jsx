"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Globe Visualization",
    description:
      "An interactive 3D globe using Three.js and React.js, designed for visualizing global data dynamically.",
    stack: [{ name: "HTML5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/work/thumb2.png",
    live: "https://fawad526.github.io/Globe-Xgridtask2/",
    github: "https://github.com/fawad526/Globe-Xgridtask2",
  },
  {
    num: "02",
    category: "Portfolio",
    title: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website built with Next.js and styled with Tailwind CSS.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
    ],
    image: "/work/thumb1.png",
    live: "https://fawad-alpha.vercel.app/work",
    github: "https://github.com/fawad526/Resume",
  },
  {
    num: "03",
    category: "Backend",
    title: "User Authentication System",
    description:
      "A secure, full-stack user authentication system built with React.js, Node.js, and MongoDB, supporting user registration and login.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "JavaScript" },
      { name: "MongoDB" },
    ],
    image: "/work/thumb6.png",
    live: "https://github.com/fawad526/Authentication",
    github: "https://github.com/fawad526/Authentication",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Advanced State Management",
    description:
      "A comprehensive React project demonstrating advanced state management techniques with Redux for complex state handling.",
    stack: [{ name: "React.js" }, { name: "Redux" }, { name: "JavaScript" }],
    image: "/work/thumb5.png",
    live: "https://fawad526.github.io/advanced-state-management/",
    github: "https://github.com/fawad526/Authentication",
  },
  {
    num: "05",
    category: "Backend",
    title: "Social Media Backend API",
    description:
      "A RESTful API for a social media platform's backend, managing user posts, comments, and authentication processes.",
    stack: [{ name: "React.js" }, { name: "Redux" }, { name: "JavaScript" }],
    image: "/work/thumb6.png",
    live: "https://github.com/fawad526/socialmedia_Backend_REST_API",
    github: "https://github.com/fawad526/socialmedia_Backend_REST_API",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Formik-based Form",
    description:
      "A user input form created with Formik and Yup for form validation and data submission in React applications.",
    stack: [{ name: "React.js" }, { name: "Formik" }, { name: "JavaScript" }],
    image: "/work/thumb4.png",
    live: "https://fawad526.github.io/formbasic-advancedbyformik/",
    github: "https://github.com/fawad526/formbasic-advancedbyformik",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Custom React Hooks",
    description:
      "A project showcasing the development of custom React hooks for efficient state management and side effects handling.",
    stack: [{ name: "React.js" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/work/thumb3.png",
    live: "https://fawad526.github.io/customHookdesc/",
    github: "https://github.com/fawad526/customHookdesc",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.live || "#"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full jusify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
