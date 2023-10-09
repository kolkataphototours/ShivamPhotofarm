"use client";
import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

const Footer = () => {
  const [result, setResult] = useState(false);

  const form = useRef();

  const Result = () => {
    return <p>Thank You, your message has been successfully sent.</p>;
  };

  const sendEmail = (e) => {};

  return (
    <footer class="footer_wrapper mt-8  py-6  text-black flex justify-center drop-shadow-md bg-white h-screen">
      <div class="w-4/5 bg-gray-300 h-11/12 py-2">
        <section class="page_section contact" id="contact">
          <div class="contact_section  mb-12">
            <h2 class="text-2xl md:text-3xl  text-center mt-4 mb-2 font-sang font-medium">
              We'd love to hear you
            </h2>
            <div className="h-px w-1/6 rounded-md bg-zinc-900 mx-auto shadow-xl"></div>
          </div>

          <div className="mb-8 ">
            <form ref={form} onSubmit={sendEmail} class="form text-black ">
              <div className="flex flex-col justify-center justify-items-center gap-2 mx-8 md:mx-32 lg:gap-4  ">
                <div className="flex flex-col md:flex-row mr-auto w-full justify-evenly mb-[-10px] md:mb-[-15px] ">
                  <input
                    class="input-text mb-4 p-2 md:w-2/5 md:mr-12  border   bg-zinc-50  border-gray-300 rounded-lg"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    class="input-text mb-4 p-2 md:w-2/5 border bg-zinc-50 border-gray-300 rounded-lg"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col md:flex-row mr-auto w-full justify-evenly mb-[-10px] md:mb-[-15px]">
                  <input
                    class="input-text mb-4 p-2 md:w-2/5 md:mr-12  border   bg-zinc-50  border-gray-300 rounded-lg"
                    type="number"
                    name="number"
                    placeholder="Phone No."
                  />
                  <input
                    class="input-text mb-4 p-2 md:w-2/5 border bg-zinc-50 border-gray-300 rounded-lg"
                    type="date"
                    name="date"
                    placeholder="Date"
                  />
                </div>
                <div className="text-center w-full">
                  <textarea
                    class="input-text text-area w-full md:w-11/12 mb-2 p-2  border bg-zinc-50 border-gray-300 rounded-lg h-32 "
                    cols="0"
                    rows=""
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex justify-center w-full">
                  <button
                    class="input-btn mt-4 md:mt-0 w-full md:w-2/3 px-4 py-2 bg-gray-800  text-white rounded-xl cursor-pointer font-ste hover:bg-black"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" flex flex-col items-center ">
            <h2 className="text-lg md:text-2xl lg:text-3xl">
              Or Else We Are Quite Active On
            </h2>
            <ul class="flex  mt-5 ">
              <li>
                <a
                  href="https://www.instagram.com/shivam_photofarm"
                  target="_blank"
                  class="text-2xl lg:text-4xl mx-2 hover:text-[#E4405F] text-black"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shivam.pandey.75286"
                  target="_blank"
                  class="text-2xl lg:text-4xl mx-2 hover:text-[#1877F2] text-black"
                >
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+918240668648"
                  target="_blank"
                  class="text-2xl lg:text-4xl mx-2 hover:text-[#25D366] text-black"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
