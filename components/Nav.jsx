"use client";
// components/Navbar.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const firstLine = {
    initial: {
      rotate: 0,
    },
    final: {
      rotate: 45,
      y: 8,
    },
  };

  const middleLine = {
    initial: {
      opacity: 1,
    },
    final: {
      opacity: 0,
    },
  };

  const lastLine = {
    initial: {
      rotate: 0,
    },
    final: {
      rotate: -45,
      y: -8,
    },
  };

  return (
    <div className="bg-transparent shadow-sm w-full  text-gray-500 container-fluid">
      <div className="flex justify-between items-center mx-4 h-16 ">
        <h1 className="md:text-3xl font-semibold font-sang">
          Shivam PhotoFarm
        </h1>

        <div onClick={toggleMenu} className="cursor-pointer z-20">
          <motion.div
            variants={firstLine}
            initial="initial"
            animate={isOpen ? "final" : "initial"}
            className="h-1 bg-gray-500 w-8 m-1"
          ></motion.div>
          <motion.div
            variants={middleLine}
            initial="initial"
            animate={isOpen ? "final" : "initial"}
            className="h-1 bg-gray-500 w-8 m-1"
          ></motion.div>
          <motion.div
            variants={lastLine}
            initial="initial"
            animate={isOpen ? "final" : "initial"}
            className="h-1 bg-gray-500 w-8 mx-1"
          ></motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="h-screen bottom-[1px]  absolute  w-full bg-opacity-70 backdrop-blur-md backdrop-filter"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            }}
          >
            <div className="flex flex-col relative mx-24 h-full justify-center">
              <Link href="/" className="mb-5">
                <motion.ul
                  initial={{ x: "-70vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                  className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                  onClick={toggleMenu}
                >
                  Home
                </motion.ul>
              </Link>
              <Link href="/works/portraits" className="mb-5">
                <motion.ul
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                  className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                  onClick={toggleMenu}
                >
                  Our works
                </motion.ul>
              </Link>
              <Link href="/inspiration" className="mb-5">
                <motion.ul
                  initial={{ x: "-140vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                  className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang "
                  onClick={toggleMenu}
                >
                  Inspiration
                </motion.ul>
              </Link>
              <Link href="/about" className="mb-5">
                <motion.ul
                  initial={{ x: "-180vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                  className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                  onClick={toggleMenu}
                >
                  About
                </motion.ul>
              </Link>
              <Link href="/contact" className="mb-5">
                <motion.ul
                  initial={{ x: "-200vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.9 }}
                  whileHover={{ scale: 1.1, originX: 0, color: "gray" }}
                  className="md:text-6xl text-white underline underline-offset-8 w-1/2 m-3 font-sang"
                  onClick={toggleMenu}
                >
                  Contact
                </motion.ul>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
