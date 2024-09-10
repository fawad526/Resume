"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "(+92) 333 4513912",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "fawadiqbal274@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "Rawalpindi Jinnah Camp",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, service, message } = formData;

    // WhatsApp API URL with pre-filled message
    const whatsappMessage = `Name: ${firstname} ${lastname}
    Email: ${email}
    Phone: ${phone}
    Service: ${service}
    Message: ${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number where the message should be sent
    const whatsappUrl = `https://wa.me/923334513912?text=${encodedMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, ease: "easeIn", duration: 0.4 },
      }}
      className="py-6"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Please fill in the form, and it we redirect to my WhatsApp on
                submit button will contact you shortly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  onChange={handleInputChange}
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  onChange={handleInputChange}
                />
              </div>
              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Developer">
                      Frontend Developer
                    </SelectItem>
                    <SelectItem value="Fullstack developer">
                      FullStack Developer
                    </SelectItem>
                    <SelectItem value="API integration">
                      Third-Party API Integration
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                onChange={handleInputChange}
              />

              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.Description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
