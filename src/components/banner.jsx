import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import BirdImage from "../assets/images/banner-bird-image.png";
import CloudImage1 from "../assets/images/cloud__1.png";
import CloudImage2 from "../assets/images/cloud__2.png";
import CloudImage3 from "../assets/images/cloud__3.png";
import CloudImage4 from "../assets/images/cloud__4.png";
import CloudImageMain from "../assets/images/cloud_main.png";


export default function Banner() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastscrollY, setLastScrollY] = useState(0);
    console.log(window)
   
   useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    const direction = currentScrollY > lastScrollY ? "down" : "up";
    setScrollDirection(direction);
    lastScrollY = currentScrollY;
  };

  // Use requestAnimationFrame for smooth scroll tracking
  const handleScrollWithRAF = () => {
    requestAnimationFrame(handleScroll);
  };

  window.addEventListener("scroll", handleScrollWithRAF, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScrollWithRAF);
  };
}, []);


    return (
        <div className="relative overflow-x-clip">
            <motion.div
                initial={{ x: -500, opacit: 1, scale: 1 }}
                animate={{ x: 0, opacity: scrollDirection === "up" ? 1 : 0, scale: scrollDirection === "up" ? 0.9 : 1 }}
                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="mx-32 ">
                <img style={{ width: "500px" }} src={CloudImageMain} alt="main cloud" />
            </motion.div>

            <motion.div
                initial={{ x: 500 }}
                animate={{ x: scrollDirection === "up" ? 0 : -80 }}
                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="absolute top-[-190px] right-[-100px]">
                <img style={{ width: "550px" }} src={CloudImage1} alt="top cloud right" />
            </motion.div>

            <motion.div
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === "down" ? -100 : 0 }}
                transition={{
                    type: "keyframes",
                    duration: 1,
                    ease: "easeInOut"
                }}
                className="absolute top-[-230px] left-[-290px]">
                <img style={{ width: "400px" }} src={CloudImage3} alt="top left cloud" />
            </motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: scrollDirection === "down" ? 50 : 0,
                    scale: scrollDirection === "down" ? 1.07 : 1
                }}

                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="absolute top-52 left-72">
                <img style={{ width: "300px" }} src={CloudImage4} alt="small cloud left" />
            </motion.div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === "up" ? 0 : -50 }}
                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="absolute top-48 right-96">
                <img style={{ width: "250px" }} src={CloudImage4} alt="small cloud right" />
            </motion.div>
            <motion.div
                initial={{ x: 0, scale: 0 }}
                animate={{ x: scrollDirection === "up" ? 0 : -100, scale: scrollDirection === "up" ? 0 : 1.5 }}
                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="absolute button-0 right-32">
                <img style={{ width: "200px" }} src={CloudImage4} alt="small cloud button right" />
            </motion.div>
            <motion.div
                initial={{ x: 500 }}
                animate={{ x: scrollDirection === "up" ? 0 : -80 }}
                transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                className="absolute top-48 right-[-90px]">
                <img style={{ width: "160px" }} src={CloudImage4} alt="small cloud right last" />
            </motion.div>

            {/* Bird */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: scrollDirection === "up" ? -130 : 100 }}
                transition={{
                    type: "keyframe",
                    duration: 1,
                    ease: "easeInOut"
                }}
                className="hidden md:block absolute top-60 right-0 md:top-full  md:right-9">
                <img style={{ width: "350px" }} src={BirdImage} alt="bird" />
            </motion.div>

            {/* bird for mobile */}
            <motion.div className="md:hidden absolute top-80 left-1/2 transform -translate-x-1/2 w-80">
                <motion.img
                    key={scrollDirection}
                    initial={{ y: 0 }}
                    animate={{ y: scrollDirection === "down" ? 100 : -180 }}
                    transition={{ type: "keyframes", duration: 1, ease: "easeInOut" }}
                    src={BirdImage}
                    alt="bird"
                />
            </motion.div>

            <motion.div
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === "up" ? -100 : 0 }}
                transition={{
                    type: "keyframe",
                    duration: 1,
                    ease: "easeInOut"
                }}
                className="absolute top-56 left-[-200px]">
                <img style={{ width: "600px" }} src={CloudImage2} alt="buttom cloud" />
            </motion.div>
        </div>
    )
}