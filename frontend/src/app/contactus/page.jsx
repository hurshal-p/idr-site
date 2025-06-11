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
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    // Clear error when typing
    setFieldErrors(prev => ({ ...prev, [e.target.id]: false }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: false,
      email: false,
      message: false
    };

    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = true;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setFieldErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus("Please fill all fields correctly");
      setSuccess(false);
      return;
    }

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
    <div className="py-20 md:py-32 overflow-y-hidden h-screen fixed inset-0" key="contactus">
      <Hero src="/images/contacthero.jpg" id='contactpghero' />

      <div id='movecontactbox' className="left-1/2 transform -translate-x-1/2 relative z-50 w-fusall px-4 sm:px-6 lg:px-10 max-w-full md:max-w-4xl mt-10 md:mt-16 text-white translate-y-[-81vh] justify-center align-center rounded-lg text-2xl text-shadow-[2px_2px_4px_#186466]"> 
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
              className={`hover:scale-101 transition-all duration-200 w-full rounded-md bg-transparent px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0 ${
                fieldErrors.name ? 'border border-red-500' : ''
              }`}
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
              className={`hover:scale-101 transition-all duration-200 w-full rounded-md bg-transparent px-4 md:px-6 py-3 md:py-4 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0 ${
                fieldErrors.email ? 'border border-red-500' : ''
              }`}
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
              className={`hover:scale-101 transition-all duration-200 resize-none w-full h-[25vh] rounded-md bg-transparent px-4 md:px-6 py-3 md:py-2 text-white placeholder-gray-300 shadow-lg text-base md:text-xl focus:outline-none focus:ring-0 ${
                fieldErrors.message ? 'border border-red-500' : ''
              }`}
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
            {success === false && status && !fieldErrors.name && !fieldErrors.email && !fieldErrors.message && (
              <h4 className="text-white text-center">{status}</h4>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}