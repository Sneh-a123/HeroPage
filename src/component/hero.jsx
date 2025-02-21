import React from "react";
import {easeInOut, motion} from "motion/react";
import Image1 from "../assets/map-interactive.png";
import Image2 from "../assets/bigger-science_thumbnail-2.png";
import Image3 from "../assets/Capture-dâeÌcran-2023-04-03-aÌ-10.59.43_2-2.jpg";
import Image4 from "../assets/Capture daÌeIÌcran 2024-01-04 aIÌ 16.41.06-2.png"

function hero(){
    return(
        <>
            <div className="group relative">
                <div className="z-10 ">
                    <motion.img 
                    whileHover={{
                        left: 200,
                        bottom: 70,
                        transition: easeInOut
                    }}
                    className="md:w-[300px] w-[170px] md:mt-[60px] mt-[100px] relative left-[55%] group-hover:opacity-40 hover:opacity-100 transition duration-300 group-hover:z-10 hover:z-20 z-10" src={Image1} alt="" />
                    <motion.img
                     whileHover={{
                        left: 200,
                        bottom: 70,
                        transition: easeInOut
                    }}
                    className="md:w-[300px] w-[170px] relative md:bottom-[50px] left-[10%] group-hover:opacity-40 hover:opacity-100 transition duration-300 group-hover:z-10 hover:z-20 z-10" src={Image2} alt="" />
                    <motion.img 
                     whileHover={{
                        left: 300,
                        bottom: 70,
                        transition: easeInOut
                    }}
                    className="md:w-[300px] w-[170px] relative md:bottom-[70px] left-[60%] group-hover:opacity-40 hover:opacity-100 transition duration-300 group-hover:z-10 hover:z-20 z-10" src={Image3} alt="" />
                    <motion.img 
                     whileHover={{
                        left: 500,
                        right: 700,
                        transition: easeInOut
                    }}
                    className="md:w-[300px] w-[170px] relative md:bottom-[100px] left-[20%] group-hover:opacity-40 hover:opacity-100 transition duration-300 group-hover:z-10 hover:z-20 z-10" src={Image4} alt="" />
                </div>
                <div className="flex justify-center items-center group-hover:opacity-40 hover:opacity-100 transition duration-300 group-hover:z-10 z-20">
                    <h1  className="text-white text-center relative bottom-[290px] md:bottom-[630px] text-[3rem] md:text-[5rem] font-[900] px-[100px] md:px-[300px] leading-none z-20">IMAGINING UNIQUE CONCEPTS AND DIGITAL EXPERIENCES</h1>  
                </div>
            </div>
        </>
    )
}

export default hero