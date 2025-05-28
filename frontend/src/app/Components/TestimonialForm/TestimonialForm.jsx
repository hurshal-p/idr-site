'use client';

import { useState } from 'react';
import './TestimonialForm.css';

export default function TestimonialForm({ setTestimonials }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
     const res = await fetch('http://localhost:8000/api/testimonials/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, message: review }),
    });

      if (res.ok) {
        const newTestimonial = await res.json();
        setTestimonials(prev => [newTestimonial, ...prev]);
        setMessage('Thank you for your review!');
        setName('');
        setReview('');
      } else {
        setMessage('Failed to submit. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting review.');
    }
  }

  return (
    <div className="testimonial-form-outer">
    <div className="w-full flex justify-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        id='testimonial-form-inner'
        className="w-full max-w-3xl mx-auto bg-transparent border border-gray-200 p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-medium text-center mb-10 text-black" id='leavetestimonialtext'>Leave a Testimonial</h2>

        <label className="block mb-6">
          <span className="text-xl font-medium text-black">Your Name</span>
          <input
            id='textbox'  
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 block w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </label>

        <label className="block mb-8">
          <span className="text-xl font-medium text-black" >Your Review</span>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            rows={5}
            id='textbox'
            className="mt-2 block w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#5ba8b8] text-white py-3 px-6 text-lg rounded-lg hover:text-black transition duration-300"
     >
          Submit
        </button>

        {message && (
          <p className="mt-6 text-center text-lg text-black">{message}</p>
        )}
      </form>
    </div>

    </div>
  );
}
