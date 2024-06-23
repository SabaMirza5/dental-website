// import React from 'react'

// function Contect_us() {
//   return (
//     <>
//       <section className="bg-[#f2f8fb] py-32">
//         <div className="text-center">
//             <h2 className="text-[30px] arimo font-bold text-[#162447] ">Contact </h2>
//             <p className="text-lg open-sans font-normal my-10">If you have questions or want to schedule an online demo of <br/> our application: </p>
//             <p className="text-lg open-sans font-normal mb-10">info@dentallabguru.com</p>
//                 <form action="">
//                     <label for="Email" className="text-lg open-sans font-normal" >Email address*</label><br/>
//                     <input type="email" className="mt-2 mb-4 w-1/3 px-3 py-2 bg-white border border-[#ced4da] rounded-md"/>
//                     <br>
//                     <label for="Email" className="text-lg open-sans font-norma" >Phone</label><br/>
//                     <input type="email" className="mt-2 mb-5 w-1/3 px-3 py-2 bg-white border border-[#ced4da] rounded-md"/>
//                     <br>
//                     <label for="Email" className="text-lg open-sans font-norma" >Your message</label><br/>
//                     <textarea type="email" className="mt-2 w-1/3 px-3 py-2 bg-white border border-[#ced4da] rounded-md h-32"></textarea>
//                     <br>
//                     <button className="text-white bg-[#049aa1] px-5 py-2 rounded-[30px] open-sans font-bold mt-8">Send</button>
//                 </form>
//             <div className="flex items-center justify-center gap-8 mt-16">
//                 <a href="https://www.facebook.com/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] block" > 
//                 <i className="lni lni-facebook-fill text-white"></i>
//                 </a>
//                 <a href="https://www.facebook.com/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007bb5] block" > <i className="lni lni-linkedin text-white"></i></i>
//                 </a>
//                 <a href="https://www.facebook.com/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8a3ab9] block" > <i className="lni lni-instagram text-white"></i></i>
//                 </a>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Contect_us










import React from 'react';

function ContactUs() {
  return (
    <>
      <section className="bg-[#f2f8fb] md:py-32 py-10 md:px-0 px-[5%]">
        <div className="text-center">
          <h2 className="text-[30px] arimo font-bold text-[#162447]" data-aos="fade-up">Contact</h2>
          <p className="text-lg open-sans font-normal my-10" data-aos="fade-right">
            If you have questions or want to schedule an online demo of <br /> our application:
          </p>
          <p className="text-lg open-sans font-normal mb-10">info@dentallabguru.com</p>
          <form action="">
            <label htmlFor="Email" className="text-lg open-sans font-normal">Email address*</label>
            <br />
            <input type="email" className="mt-2 mb-4 md:w-1/3 w-full px-3 py-2 bg-white border border-[#ced4da] rounded-md" />
            <br />
            <label htmlFor="Phone" className="text-lg open-sans font-normal">Phone</label>
            <br />
            <input type="tel" className="mt-2 mb-5 md:w-1/3 w-full px-3 py-2 bg-white border border-[#ced4da] rounded-md" />
            <br />
            <label htmlFor="Message" className="text-lg open-sans font-normal">Your message</label>
            <br />
            <textarea className="mt-2 md:w-1/3 w-full px-3 py-2 bg-white border border-[#ced4da] rounded-md h-32"></textarea>
            <br />
            <button className="text-white bg-[#049aa1] px-5 py-2 rounded-[30px] open-sans font-bold mt-8">Send</button>
          </form>
          <div className="flex items-center justify-center gap-8 mt-16">
            <a href="https://www.facebook.com/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] block">
              <i className="lni lni-facebook-fill text-white"></i>
            </a>
            <a href="https://www.linkedin.com/company/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#007bb5] block">
              <i className="lni lni-linkedin text-white"></i>
            </a>
            <a href="https://www.instagram.com/DentalLabGuru" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8a3ab9] block">
              <i className="lni lni-instagram text-white"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
