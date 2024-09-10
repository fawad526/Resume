"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/fawad526",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/fawad526/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
