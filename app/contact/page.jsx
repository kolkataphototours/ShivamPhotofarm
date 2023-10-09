"use client";
import React, { useState, useRef } from "react";

const Contact = () => {
  return (
    <div className="w-screen pb-4">
      <div className="w-3/5 flex mx-auto flex-col justify-center items-center mt-16 mb-12">
        <p
          style={{
            fontSize: "15px",
            fontWeight: 300,
          }}
          className="text-base"
        >
          If you are keen to get in touch you can email me at
          <strong> info@jaredbuckley.co.nz</strong> or call me on{" "}
          <strong>0273537849</strong>.
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 300,
          }}
          className="text-base"
        >
          Otherwise please feel free to fill in the form below.{" "}
        </p>
      </div>

      <div className="w-3/4 mx-auto flex flex-col items-end">
        <input
          style={{
            borderColor: "black",
            color: "black",
            fontSize: "14px",
            fontWeight: "300",
          }}
          className="w-full border border-opacity-50 h-9 p-2 text-base mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Name *"
          type="text"
          required
        />
        <input
          style={{
            borderColor: "black",
            color: "black",
            fontSize: "14px",
            fontWeight: "300",
          }}
          className="w-full border border-opacity-50 h-9 p-2 text-base mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Email *"
          type="email"
          required
        />
        <input
          style={{
            borderColor: "black",
            color: "black",
            fontWeight: "300",
            fontSize: "14px",
          }}
          className="w-full border border-opacity-50 h-9 p-2 text-base mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Date(s) *"
          type="text"
          required
        />
        <input
          style={{
            borderColor: "black",
            color: "black",
            fontSize: "14px",
            fontWeight: "300",
          }}
          className="w-full border border-opacity-50 h-9 p-2 text-base mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Shoot Type/ Location *"
          type="text"
          required
        />
        <textarea
          style={{
            borderColor: "black",
            color: "black",
            fontSize: "15px",
            fontWeight: "300",
          }}
          className="w-full border border-opacity-50 p-2 text-base mb-1 focus:border-black focus:outline-none placeholder-black"
          placeholder="Message"
          type="text"
          rows={5}
        />
        <button
          style={{ fontSize: "14px", fontWeight: "300" }}
          className="bg-black text-white py-1 px-2 h-8 w-12 flex mt-1"
        >
          Send
        </button>
      </div>

      <div className="mt-16 w-2/5 h-2/6 mx-auto">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cf9ead1959e5d0001c13935/1612866349304-T1QLO6013OGNS761JRR7/Wedding+Videographer+Family+Shot.JPG?format=1500w"
          className="h-full w-full"
        />
      </div>

      <div className="mt-16 w-2/5 h-2/6 mx-auto border-l pl-4 pt-2 pb-4 border-black flex flex-col items-end">
        <p
          style={{
            color: "rgb(24, 40, 47)",
            fontSize: "15px",
            fontWeight: "300",
            lineHeight: "30px",
          }}
        >
          “Jared was so easy to communicate with, super easy going and
          accommodating! We had the audio recordings of the ceremony and
          speeches and he made that happen for us, I love listening back these
          special moments. Making arrangements with him for the day was so
          stress free and we are so grateful for that! At the wedding Jared was
          excellent, he was very friendly and captured all the good stuff! The
          finish product is amazing and felt so us, the music he paired with the
          wedding video is beautiful. I’m so grateful to be able to watch our
          wedding video and listen to highlights of our vows. It’s also so
          special to see our loved ones laughing, dancing, enjoying the night.
          Be Joined Films was a breeze to work with and the video is something
          we will always cherish. ”
        </p>
      </div>

      <div className="mt-2 w-2/5 h-2/6 mx-auto flex flex-col items-end">
        <p
          style={{
            color: "rgb(24, 40, 47)",
            fontSize: "15px",
            fontWeight: "300",
          }}
        >
          — Arley
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center ">
        <h2
          style={{ fontWeight: 300 }}
          className="text-lg md:text-2xl lg:text-2xl"
        >
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

      <div className="mx-auto w-2/5 mt-4 flex justify-center items-center">
        <p
          style={{
            fontSize: "12px",
            fontWeight: 300,
          }}
        >
          Creating captivating photography and cinematic videography images
        </p>
      </div>
    </div>
  );
};

export default Contact;
