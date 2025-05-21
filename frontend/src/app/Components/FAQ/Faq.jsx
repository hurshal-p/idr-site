'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// import downarrow from '/images/chevron-down.svg';
// import uparrow from '/images/chevron-up.svg';
import './Faq.css';
import { faqData } from './questions'; // Adjust path if needed

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq">
      <h2 className="faqtitle">FAQs</h2>
      <div className="faqcontainer">
        {faqData.map((item, index) => (
          <article key={index} className="faq-item">
            <div className="faq-question">
              <h3>{item.question}</h3>
              <button onClick={() => toggleQuestion(index)}>
                <img
                  src={'/images/chevron-down.svg'}
                  alt='toggle'
                  className={activeIndex === index ? 'rotated' : ''}
                />
              </button>
            </div>

            {/* Always rendered - just animate open/closed */}
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Faq;
