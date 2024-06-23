import React from "react";
import hero from "../../assets/imgs/hero.png";
import arrow from "../../assets/imgs/arrow.png";


function Header() {
  return (
    <>
      <section className="xl:px-[15%] px-[5%] header-section bg-top bg-no-repeat md:pt-52 pt-32 pb-12">
        <div className="flex items-center lg:flex-row flex-col">
        <div className="basis-2/5" data-aos="fade-right">
            <h1 className="md:text-[44px] text-2xl text-white arimo font-bold md:leading-[60px] leading-7 ">Everything that dental technicians need - from creating a case to an invoice.   </h1>
            <p className="text-lg text-white md:mt-10 mt-5 md:mb-12 mb-8 open-sans font-normal">Quick and easy organization of your laboratory</p>
            <div className="">
                <a href="" className="bg-[#1eae91] border-2 border-[#47b6a0] rounded-[50px] px-9 py-5 text-white font-bold arimo">Try for Free!</a>
            </div>
            <div className="md:mt-24 mt-10">
                <a href=""><img src={arrow} alt=""/></a>
            </div>
        </div>
        <div className="basis-3/5 md:mt-0 mt-5" data-aos="fade-left">
            <img src={hero} alt=""/>
        </div>
    </div>
    </section>
    </>
  );
}

export default Header;
