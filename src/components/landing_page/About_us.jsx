import React from 'react'
import about1 from "../../assets/imgs/about1.png";
import about2 from "../../assets/imgs/about2.png";
import about3 from "../../assets/imgs/about3.png";

function About_us() {
  return (
    <>
       <section>
        <div className="lg:px-[15%] px-[5%] bg-[#f2f8fb] flex items-center py-20 gap-5 md:flex-row flex-col-reverse">
            <div className="basis-1/2" data-aos="fade-right">
                <img src={about1} alt=""/>
            </div>
            <div className="basis-1/2" data-aos="fade-left">
                <h2 className="text-[30px] text-[#162447] font-bold arimo mb-8">Create a case in a simple way</h2>
                <ul className="">
                    <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Choose a doctor and a patient</p></li>
                       <li className="gap-3 flex items-center my-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Add products</p></li>
                       <li className="gap-3 flex items-center mb-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Define the dates of the tryouts and the finish date</p></li>
                       <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Follow the history of changes to each case</p></li>
                </ul>
            </div>
        </div>
        <div className="lg:px-[15%] px-[5%]  flex items-center py-12 gap-5 my-32 md:flex-row flex-col">
           
            <div className="basis-1/2" data-aos="fade-right">
                <h2 className="text-[30px] text-[#162447] font-bold arimo mb-8">Review deadlines in one place
                </h2>
                <ul className="">
                    <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Finish dates
                    </p></li>
                       <li className="gap-3 flex items-center my-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Tryout dates
                    </p></li>
                       <li className="gap-3 flex items-center mb-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Tasks finish dates
                    </p></li>
                </ul>
            </div>
            <div className="basis-1/2" data-aos="fade-left">
                <img src={about2} alt=""/>
            </div>
        </div>
        <div className="lg:px-[15%] px-[5%] bg-[#f2f8fb] flex items-center py-20 gap-5 md:flex-row flex-col-reverse">
            <div className="basis-1/2" data-aos="fade-right">
                <img src={about3} alt=""/>
            </div>
            <div className="basis-1/2" data-aos="fade-left">
                <h2 className="text-[30px] text-[#162447] font-bold arimo mb-8">
                    Monitor and plan production</h2>
                <ul className="">
                    <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Assign tasks
                    </p></li>
                       <li className="gap-3 flex items-center my-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Monitor efficiency
                    </p></li>
                       <li className="gap-3 flex items-center mb-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo">Calculate bonuses
                    </p></li>
                       <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Have a clear insight into the statistics
                    </p></li>
                </ul>
            </div>
        </div>
        <div className="lg:px-[15%] px-[5%]  flex items-center py-12 gap-5 md:my-32 my-9 md:flex-row flex-col">
           
            <div className="basis-1/2" data-aos="fade-right">
                <h2 className="text-[30px] text-[#162447] font-bold arimo mb-8 pr-5">Quickly create invoices and record payments

                </h2>
                <ul className="">
                    <li className="gap-3 flex items-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Automatic invoice generation

                    </p></li>
                       <li className="gap-3 flex items-center my-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Easily spot unpaid invoices

                    </p></li>
                       <li className="gap-3 flex items-center mb-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo"> Print invoices

                    </p></li>
                    <li className="gap-3 flex items-center mb-6">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#1EAE91"/>
                            </svg>
                            
                       <p className="text-[20px] text-[#162447] arimo">Simply create a debt document in PDF


                    </p></li>
                </ul>
            </div>
            <div className="basis-1/2" data-aos="fade-left">
                <img src={about2} alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default About_us
