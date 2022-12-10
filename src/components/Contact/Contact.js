import React from "react";
import img from '../../images/Contact us-bro.png'

export default function Contact() {
  return (
    <section id="contact" className="px-20 pt-20 bg-black text-white">
        
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img src={img} alt="" />
         </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          action="https://getform.io/f/6d9060c3-61fc-4d14-8c9b-deb8db209a46" method="POST">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-bold title-font">
            Contact With Me
          </h2>
          <p className="leading-relaxed mb-5">
           If you have any query, contact via message.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white rounded text-lg btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}