"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
   "I am a passionate Software Developer with over 3 years of experience in designing and building efficient, scalable web applications. My expertise spans across full-stack development, focusing on creating user-centric solutions that drive business success.",
  info: [
    {
      fieldName: "Name",
      value: "Fawad Iqbal",
    },
    {
      fieldName: "phone",
      value: "(+92) 333 4513912",
    },
    {
      fieldName: "Experience",
      value: "3+ years",
    },
    {
      fieldName: "Nationailty",
      value: "Pakistan",
    },
    {
      fieldName: "Email",
      value: "fawadiqbal274@gmail.com",
    },
    {
      fieldName: "Freelance",
      value: "Available",
    },
    {
      fieldName: "Languages",
      value: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Throughout my career, I have worked with various teams, building dynamic and responsive web applications. My experience includes developing full-stack solutions, collaborating in agile environments, and continuously improving systems to meet evolving user needs.",
  items: [
    {
      company: "Liam Crest Corp.",
      position: "Full stack developer",
      duration: "2023 - Present",
    },
    {
      company: "Texinity Technologies",
      position: "MERN Developer Intern",
      duration: " Summer 2022",
    },
    {
      company: "PSEB MERN Stack course",
      position: "MERN Developer",
      duration: " 2022-2023",
    },
    {
      company: "Daxno Texhnologoes",
      position: "MERN Developer Intern",
      duration: "2022(Jan) - 2022(May)",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a strong foundation in software engineering and technical problem-solving, built through both formal education and hands-on projects. My academic journey has prepared me to effectively tackle complex development challenges.",
  items: [
    {
      institution: "Air University Islamabad",
      degree: "Bachelors in Software Engineering",
      duration: "2019 - 2023",
    },
    {
      institution: "Fazaia Degree Colege MRF kamra",
      degree: "FSC pre-Engineering",
      duration: " 2017-2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
   "I possess a diverse skill set, spanning across both frontend and backend technologies. With proficiency in modern frameworks and tools, I build solutions that are efficient, scalable, and maintainable.",
  skillList: [
    {
      name: "Html",
      icon: <FaHtml5 />,
    },
    {
      name: "Css",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind.css",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex  items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="expereience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="expereience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="expereience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title} </h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title} </h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full  xl:text-left  text-center"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="text-4xl font-bold">{about.title}</div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[6w0px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
