import React from 'react'
import partner1 from "../../assets/imgs/partner1.png";
import partner2 from "../../assets/imgs/partner2.png";

function Partner() {
  return (
    <>
         <section className="md:py-32 py-10">
        <div>
            <h2 className="text-center text-[30px] text-[#162447] arimo font-bold " data-aos="fade-up">Our partners </h2>
            <div className="flex items-center justify-center md:gap-20 gap-5 md:mt-20 mt-8 md:flex-row flex-col">
                <img src={partner1} data-aos="fade-right" alt=""/>
                <img src={partner2} data-aos="fade-left" alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Partner
