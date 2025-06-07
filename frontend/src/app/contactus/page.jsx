'use client';
import Hero from "@/app/Components/Hero/Hero";
import Image from "next/image";
import './page.css'
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(null);
  setStatus("Sending...");
    
    try {
    const response = await fetch("http://127.0.0.1:8000/contact/submit/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      setStatus("Message sent!");
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error: " + result.message);
      setSuccess(false);
    }
  } catch (error) {
    setStatus("Error: " + error.message);
    setSuccess(false);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="py-20 md:py-32" key="contactus">
      <Hero src="/images/contacthero.jpg" />

      <div className="relative z-50 w-fusall px-4 sm:px-6 lg:px-10 max-w-full md:max-w-4xl  mt-10 md:mt-16 text-white translate-x-[50%] translate-y-[-110%] justify-center align-center rounded-lg text-2xl text-shadow-[2px_2px_4px_#186466]"> 
      

        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg md:text-xl font-semibold mb-2">
              Name
            </label>
            
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="hover:scale-101 transition-all duration-200 w-full rounded-md bg-transparent px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0"
            />
            <br/><br/> <br/>
          </div>
          

          <div>
            <label htmlFor="email" className="block text-lg md:text-xl font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="hover:scale-101 transition-all duration-200 w-full rounded-md bg-transparent px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0"
            />
              <br/><br/> <br/>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg md:text-xl font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={8}
              placeholder="Your message..."
              value={formData.message}
             onChange={handleChange}
              className="hover:scale-101 transition-all duration-200 resize-none w-full h-40% rounded-md bg-transparent px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0"
            />
              <br/><br/> <br/>
          </div>

          <div className="shadow-[2px_2px_4px_#186466]">
            <button
              type="submit"
            
              disabled={loading}
              className="w-full bg-[#5ba8b8] text-white text-lg md:text-2xl py-3 md:py-4 px-4 md:px-6 rounded-md hover:text-black hover:scale-105 transition-all duration-300 text-shadow-[2px_2px_4px_#186466] cursor-pointer" 
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
         

          <div className="min-h-[2rem] mt-3 translate-y-[0.1rem]">
  {success === true && (
    <h4 className="text-white text-center">Message sent successfully!</h4>
  )}
  {success === false && (
    <h4 className="text-white text-center">Failed to send message.</h4>
  )}
 
</div>


        </form>

      
      </div>


      
    </div>
  );
}
