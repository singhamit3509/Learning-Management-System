import Image from "next/image";
import React from "react";
import logo from "@/assets/astronLMS.png";
import { cn } from "@/lib/utils";

const Logo = ({ className = "" }) => {
  return (
    <div className="flex items-center  justify-center md:pl-20">
      <div>
        <Image
          className={cn("max-w-[80px]", className)}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-1">
        <h5 className="text-[#67ac4d] text-[20px] leading-5 font-bold">Learning</h5>
        <h5 className="text-[#9ac34d] text-[8px] font-medium">Management System</h5>
      </div>
    </div>
  );
};

export default Logo;
