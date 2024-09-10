"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "We build responsive, fast, and visually compelling web applications that are user-centric and meet modern web standards. Our solutions ensure your users get an optimal experience on any device.",
    href: "https://github.com/fawad526",
  },
  {
    num: "02",
    title: "Full Stack Development",
    description:
      "From the front end to the back end, we provide comprehensive web development services that ensure seamless functionality and performance across the entire application stack.",
    href: "https://github.com/fawad526",
  },
  {
    num: "03",
    title: "State Management (Redux, Context API, Custom Hooks)",
    description:
      "Efficiently managing state is crucial for building scalable web applications. We utilize Redux, Context API, and custom hooks to handle complex state logic, making your application smoother and more maintainable.",
    href: "https://github.com/fawad526",
  },
  {
    num: "04",
    title: "Third-Party API Integration",
    description:
      "We integrate third-party APIs seamlessly into your applications, enabling you to leverage external services and expand your application's capabilities without compromising performance.",
    href: "https://github.com/fawad526",
  },
];

const Services = () => {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, ease: "easeInOut", duration: 0.4 },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
