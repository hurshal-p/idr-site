'use client';

import { useState } from 'react';

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
        body: JSON.stringify({ name, review }),
      });

      if (res.ok) {
        const newTestimonial = await res.json();
        setTestimonials(prev => [...prev, newTestimonial]);  // Add new testimonial to state
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl mb-4 font-bold text-center">Leave Your Testimonial</h2>
      <label className="block mb-2">
        Name:
        <input
          className="w-full border border-gray-300 rounded p-2 mt-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className="block mb-4">
        Review:
        <textarea
          className="w-full border border-gray-300 rounded p-2 mt-1"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          rows={4}
        />
      </label>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
}
