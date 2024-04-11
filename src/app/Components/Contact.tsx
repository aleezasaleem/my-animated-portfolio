import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TbBrandGithub } from "react-icons/tb";
import {  TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti"
import Link from "next/link";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="bg-[#121212] py-8 px-4  sm:py-16 xl:px-16  ">
      <div>
        <h1 data-aos="fade-up" className="text-center text-5xl lg:text-6xl text-white font-bold ">Contact</h1>
        <ul data-aos="fade-up" className=" space-y-8  md:px-4 py-16 lg:py-16">
          <li  className="bg-[#121212] rounded-full w-16 h-16 lg:w-20 lg:h-20 border-2 border-purple-500 relative">
            <MdEmail className="text-purple-500 text-3xl lg:text-5xl
          absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            <FaGreaterThan className="text-purple-500 text-3xl lg:text-5xl  absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[70%] lg:-right-[85%] " />
           <h1 className="text-white absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[460%] sm:-right-[540%] md:-right-[590%] lg:-right-[520%] text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px] "> aleezasaleem182@gmail.com</h1>
            </li>
          <li className="bg-[#121212] rounded-full w-16 h-16 lg:w-20 lg:h-20 border-2 border-purple-500 relative">
            <IoMdCall className="text-purple-500 text-3xl lg:text-5xl
          absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          <FaGreaterThan className="text-purple-500 text-3xl lg:text-5xl  absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[85%] " />
          <h1 className="text-white absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[330%] sm:-right-[380%] md:-right-[410%] lg:-right-[370%] text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px] ">+92 3243730305</h1>
          </li>
          <li  className="bg-[#121212] rounded-full w-16 h-16 lg:w-20 lg:h-20 border-2 border-purple-500 relative">
            <FaLocationDot className="text-purple-500 text-3xl lg:text-5xl
          absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          <FaGreaterThan className="text-purple-500 text-3xl lg:text-5xl  absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[85%] " />
          <h1 className="text-white absolute transform -translate-x-1/8 -translate-y-1/2 top-1/2 -right-[330%] sm:-right-[380%] md:-right-[410%] lg:-right-[370%] text-[16px] sm:text-[19px] md:text-[21px] lg:text-[22px] ">karachi , Pakistan</h1>
          </li>
        </ul>
        <div data-aos="fade-up" className="border-t border-neutral-700  py-2   "></div>
        <div data-aos="fade-up" className="flex justify-center items-center space-x-6">
         <Link    href={"https://www.linkedin.com/in/aleeza-saleem-509b37259/"} > <  TiSocialLinkedinCircular data-aos="fade-up"size={53} className="text-neutral-600 hover:text-purple-500
          transition-all duration-200 cursor-pointer" /></Link>
        <Link    href={"https://github.com/aleezasaleem"}>  <VscGithub data-aos="fade-up" size={40} className="text-neutral-600 hover:text-purple-500
          transition-all duration-200 cursor-pointer" /></Link>
         <Link    href={"https://www.facebook.com/profile.php?id=100092257066326"}> <TiSocialFacebookCircular data-aos="fade-up"  size={53} className="text-neutral-600 hover:text-purple-500
          transition-all duration-200 cursor-pointer" /></Link>

        </div>
       
        
        </div>
      
    </div>

  )
}

export default Contact